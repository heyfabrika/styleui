import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface FileNode {
  name: string;
  type: 'file' | 'directory';
  path: string;
  content?: string;
  children?: FileNode[];
}

function shouldSkipFile(entryName: string): boolean {
  return (
    entryName.startsWith('.') ||
    entryName === 'node_modules' ||
    entryName === 'index.css' ||
    entryName === '_configs' ||
    entryName === 'layouts' ||
    entryName === 'layout.tsx' ||
    entryName === 'layout.js'
  );
}

function extractBlockImports(content: string): string[] {
  const blockImports: string[] = [];
  const importRegex = /import\s+(?:\w+\s+from\s+)?["']@\/blocks\/([^"']+)["']/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const blockPath = match[1];
    const cleanPath = blockPath.replace(/\.(tsx?|jsx?)$/, '');
    blockImports.push(cleanPath);
  }
  
  return blockImports;
}

async function readBlockFiles(blockPaths: string[], blocksDir: string, processedBlocks: Set<string> = new Set()): Promise<FileNode[]> {
  const blockNodes: FileNode[] = [];

  for (const blockPath of blockPaths) {
    if (processedBlocks.has(blockPath)) continue;
    processedBlocks.add(blockPath);

    const possibleExtensions = ['.tsx', '.ts', '.jsx', '.js'];
    let blockFile: FileNode | null = null;
    let blockDir: FileNode | null = null;

    for (const ext of possibleExtensions) {
      const fullBlockPath = path.join(blocksDir, blockPath + ext);
      try {
        const stats = await fs.stat(fullBlockPath);
        if (stats.isFile()) {
          const content = await fs.readFile(fullBlockPath, 'utf-8');
          blockFile = {
            name: path.basename(fullBlockPath),
            type: 'file',
            path: `blocks/${blockPath}${ext}`,
            content,
          };
          break;
        }
      } catch {
      }
    }

    const fullBlockDirPath = path.join(blocksDir, blockPath);
    try {
      const stats = await fs.stat(fullBlockDirPath);
      if (stats.isDirectory()) {
        const children = await readDirectory(fullBlockDirPath, fullBlockDirPath);
        const blockName = path.basename(blockPath);
        blockDir = {
          name: blockName,
          type: 'directory',
          path: `blocks/${blockPath}`,
          children,
        };
      }
    } catch {
    }

    if (blockFile) {
      const nestedBlockImports = extractBlockImports(blockFile.content || '');
      if (nestedBlockImports.length > 0) {
        const nestedBlocks = await readBlockFiles(nestedBlockImports, blocksDir, processedBlocks);
        for (const nested of nestedBlocks) {
          if (!blockNodes.some(n => n.path === nested.path)) {
            blockNodes.push(nested);
          }
        }
      }

      const parentPath = path.dirname(blockPath);
      if (parentPath === '.') {
        blockNodes.push(blockFile);
      } else {
        const parts = parentPath.split(path.sep);
        let currentNodes = blockNodes;
        let currentPath = 'blocks';

        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          currentPath += `/${part}`;
          let dirNode = currentNodes.find(n => n.name === part && n.type === 'directory');
          
          if (!dirNode) {
            dirNode = {
              name: part,
              type: 'directory',
              path: currentPath,
              children: [],
            };
            currentNodes.push(dirNode);
          }
          
          currentNodes = dirNode.children || [];
        }

        currentNodes.push(blockFile);
      }
    } else if (blockDir) {
      const nestedBlockImports = new Set<string>();
      const findImportsInDir = (children: FileNode[]) => {
        for (const child of children) {
          if (child.type === 'file' && child.content) {
            const imports = extractBlockImports(child.content);
            imports.forEach(imp => nestedBlockImports.add(imp));
          }
          if (child.type === 'directory' && child.children) {
            findImportsInDir(child.children);
          }
        }
      };
      if (blockDir.children) {
        findImportsInDir(blockDir.children);
        if (nestedBlockImports.size > 0) {
          const nestedBlocks = await readBlockFiles(Array.from(nestedBlockImports), blocksDir, processedBlocks);
          for (const nested of nestedBlocks) {
            if (!blockNodes.some(n => n.path === nested.path)) {
              blockNodes.push(nested);
            }
          }
        }
      }
      blockNodes.push(blockDir);
    }
  }

  return blockNodes;
}

async function findAllBlockImports(nodes: FileNode[]): Promise<string[]> {
  const blockImports = new Set<string>();

  const traverse = (fileNodes: FileNode[]) => {
    for (const node of fileNodes) {
      if (node.type === 'file' && node.content) {
        const imports = extractBlockImports(node.content);
        imports.forEach(imp => blockImports.add(imp));
      }
      if (node.type === 'directory' && node.children) {
        traverse(node.children);
      }
    }
  };

  traverse(nodes);
  return Array.from(blockImports);
}

async function readDirectory(dirPath: string, basePath: string): Promise<FileNode[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const nodes: FileNode[] = [];

  for (const entry of entries) {
    if (shouldSkipFile(entry.name)) {
      continue;
    }

    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(basePath, fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      const children = await readDirectory(fullPath, basePath);
      nodes.push({
        name: entry.name,
        type: 'directory',
        path: relativePath,
        children,
      });
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      const textExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.md', '.mdx', '.txt', '.html'];
      
      let content: string | undefined;
      if (textExtensions.includes(ext)) {
        try {
          content = await fs.readFile(fullPath, 'utf-8');
        } catch (error) {
          console.error(`Error reading file ${fullPath}:`, error);
        }
      }

      nodes.push({
        name: entry.name,
        type: 'file',
        path: relativePath,
        content,
      });
    }
  }

  return nodes.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'directory' ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const templatePath = searchParams.get('path');

    if (!templatePath) {
      return NextResponse.json(
        { error: 'Path parameter is required' },
        { status: 400 }
      );
    }

    const urlPath = templatePath.startsWith('/') ? templatePath.slice(1) : templatePath;
    const fsPath = path.join(process.cwd(), 'app', urlPath);

    const normalizedPath = path.normalize(fsPath);
    const templatesDir = path.join(process.cwd(), 'app', 'templates');
    
    if (!normalizedPath.startsWith(templatesDir)) {
      return NextResponse.json(
        { error: 'Access denied: Path must be within templates directory' },
        { status: 403 }
      );
    }

    try {
      const stats = await fs.stat(normalizedPath);
      if (!stats.isDirectory()) {
        return NextResponse.json(
          { error: 'Path is not a directory' },
          { status: 400 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: 'Directory not found' },
        { status: 404 }
      );
    }

    const structure = await readDirectory(normalizedPath, normalizedPath);

    const blockImports = await findAllBlockImports(structure);
    
    let blocksNode: FileNode | null = null;
    if (blockImports.length > 0) {
      const blocksDir = path.join(process.cwd(), 'blocks');
      try {
        const stats = await fs.stat(blocksDir);
        if (stats.isDirectory()) {
          const blockFiles = await readBlockFiles(blockImports, blocksDir);
          if (blockFiles.length > 0) {
            blocksNode = {
              name: 'blocks',
              type: 'directory',
              path: 'blocks',
              children: blockFiles.sort((a, b) => {
                if (a.type !== b.type) {
                  return a.type === 'directory' ? -1 : 1;
                }
                return a.name.localeCompare(b.name);
              }),
            };
          }
        }
      } catch (error) {
        console.error('Error reading blocks directory:', error);
      }
    }

    const finalStructure = [...structure];
    if (blocksNode) {
      finalStructure.push(blocksNode);
    }

    return NextResponse.json({
      path: templatePath,
      structure: finalStructure,
    });
  } catch (error) {
    console.error('Error reading template code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

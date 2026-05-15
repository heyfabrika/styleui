"use client";

import React, { useState, useEffect } from 'react';
import { File, Folder, FolderOpen, ChevronRight, ChevronDown } from 'lucide-react';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { cn } from '@/lib/utils';

interface FileNode {
  name: string;
  type: 'file' | 'directory';
  path: string;
  content?: string;
  children?: FileNode[];
}

interface CodeRendererProps {
  path: string;
}

const CodeRenderer = ({ path }: CodeRendererProps) => {
  const [structure, setStructure] = useState<FileNode[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/template-code?path=${encodeURIComponent(path)}`);
        
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch template code');
        }

        const data = await response.json();
        const structureData = data.structure || [];
        setStructure(structureData);
        
        const firstPageTsx = findFirstPageTsx(structureData);
        if (firstPageTsx) {
          setSelectedFile(firstPageTsx);
          const expanded = expandPathToFile(structureData, firstPageTsx.path, new Set());
          const componentsFolder = structureData.find(
            (n: FileNode) => n.name === "components" && n.type === "directory",
          );
          if (componentsFolder) {
            expanded.add(componentsFolder.path);
          }
          setExpandedFolders(expanded);
        } else {
          if (structureData.length > 0) {
            const expanded = new Set<string>();
            const componentsFolder = structureData.find(
              (n: FileNode) => n.name === "components" && n.type === "directory",
            );
            if (componentsFolder) {
              expanded.add(componentsFolder.path);
            }
            setExpandedFolders(expanded);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (path) {
      fetchStructure();
    }
  }, [path]);

  const findFirstPageTsx = (nodes: FileNode[], isRoot: boolean = true): FileNode | null => {
    for (const node of nodes) {
      if (node.type === 'file' && node.name === 'page.tsx') {
        return node;
      }
    }
    
    for (const node of nodes) {
      if (node.type === 'directory' && node.children) {
        const found = findFirstPageTsx(node.children, false);
        if (found) return found;
      }
    }
    
    return null;
  };

  const expandPathToFile = (nodes: FileNode[], targetPath: string, expanded: Set<string>): Set<string> => {
    for (const node of nodes) {
      if (node.path === targetPath) {
        return expanded;
      }
      if (node.type === 'directory' && node.children) {
        const hasTarget = node.children.some(child => 
          child.path === targetPath || 
          (child.type === 'directory' && targetPath.startsWith(child.path + '/'))
        );
        if (hasTarget) {
          expanded.add(node.path);
          expandPathToFile(node.children, targetPath, expanded);
        }
      }
    }
    return expanded;
  };

  const toggleFolder = (folderPath: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderPath)) {
        newSet.delete(folderPath);
      } else {
        newSet.add(folderPath);
      }
      return newSet;
    });
  };

  const getFileExtension = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    const langMap: Record<string, string> = {
      'ts': 'typescript',
      'tsx': 'tsx',
      'js': 'javascript',
      'jsx': 'jsx',
      'json': 'json',
      'css': 'css',
      'md': 'markdown',
      'mdx': 'mdx',
      'html': 'html',
      'txt': 'text',
    };
    return langMap[ext] || 'text';
  };

  const renderFileTree = (nodes: FileNode[], level: number = 0): React.ReactElement[] => {
    return nodes.map((node) => {
      const isExpanded = expandedFolders.has(node.path);
      const isSelected = selectedFile?.path === node.path;

      if (node.type === 'directory') {
        return (
          <div key={node.path}>
            <div
              className={cn(
                'flex items-center gap-1 px-2 py-1.5 cursor-pointer hover:bg-muted/50 rounded-lg transition-colors',
                level > 0 && 'ml-4'
              )}
              style={{ paddingLeft: `${level * 16 + 8}px` }}
              onClick={() => toggleFolder(node.path)}
            >
              {isExpanded ? (
                <ChevronDown className="size-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="size-4 text-muted-foreground" />
              )}
              {isExpanded ? (
                <FolderOpen className="size-4 text-muted-foreground" />
              ) : (
                <Folder className="size-4 text-muted-foreground" />
              )}
              <span className="text-sm text-foreground">{node.name}</span>
            </div>
            {isExpanded && node.children && (
              <div>{renderFileTree(node.children, level + 1)}</div>
            )}
          </div>
        );
      } else {
        return (
          <div
            key={node.path}
            className={cn(
              'flex items-center gap-1 px-2 py-1.5 cursor-pointer hover:bg-muted/50 rounded-lg transition-colors',
              isSelected && 'bg-muted',
              level > 0 && 'ml-4'
            )}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => setSelectedFile(node)}
          >
            <div className="size-4" />
            <File className="size-4 text-muted-foreground" />
            <span className="text-sm text-foreground">{node.name}</span>
          </div>
        );
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-muted-foreground">Loading file structure...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-destructive">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-2 bg-white p-2 dark:bg-muted/10 md:flex-row md:gap-4 md:p-4">
      <div className="flex w-full shrink-0 flex-col overflow-auto border-border/60 max-h-[min(40vh,280px)] border-b md:max-h-none md:w-64 md:border-b-0 md:border-r">
        <div className="p-2">
          <div className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">
            Files
          </div>
          <div className="space-y-0.5">
            {renderFileTree(structure)}
          </div>
        </div>
      </div>

      <div className="min-h-0 min-w-0 flex-1 overflow-auto">
        {selectedFile ? (
          <div className="flex min-h-0 min-w-0 flex-col">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white px-3 py-2 dark:bg-muted/40 md:px-4">
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <File className="size-4 shrink-0 text-muted-foreground" />
                <span
                  className="truncate text-sm font-medium"
                  title={selectedFile.path}
                >
                  {selectedFile.path}
                </span>
              </div>
            </div>
            <div className="min-h-0 min-w-0 flex-1 overflow-x-auto p-2 md:p-4">
              {selectedFile.content !== undefined ? (
                <DynamicCodeBlock
                  lang={getFileExtension(selectedFile.name)}
                  code={selectedFile.content}
                  codeblock={{
                    className: "shadow-none border border-border/40 bg-white dark:bg-muted/20"
                  }}
                />
              ) : (
                <div className="text-sm text-muted-foreground">
                  File content is not available (binary or unsupported file type)
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Select a file to view its contents
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeRenderer;

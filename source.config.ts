import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  workspaces: {
    'docs': {
      dir: 'content/docs',
      config: await import('./content/docs/source.config'),
    },
    'components': {
      dir: 'content/components',
      config: await import('./content/components/source.config'),
    },
  },
});
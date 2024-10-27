import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;
  const componentsPath = `${srcPath}/components`;
  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
        '#': componentsPath,
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCase' as const, // Options: 'camelCase', 'camelCaseOnly', 'dashes', 'dashesOnly'
      },
    },
  };
});

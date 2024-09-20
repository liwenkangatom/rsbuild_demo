import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginTypeCheck(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
});

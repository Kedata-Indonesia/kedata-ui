import type { StorybookConfig } from 'storybook-solidjs-vite';

import { mergeConfig } from 'vite';
import { join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {
      builder: {},
    },
  },

  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@kedataindo/slots': join(
            __dirname,
            '..',
            '..',
            'slots',
            'src',
          ),
          '@kedataindo/toolkit': join(__dirname, '..', '..', 'toolkit', 'src'),
          '@kedataindo/solid-icons': join(
            __dirname,
            '..',
            '..',
            'solid-icons',
            'src',
          ),
        },
      },
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

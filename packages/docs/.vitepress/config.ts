import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  title: 'Kedata UI',
  description: 'Vue component library by Kedata Indonesia',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
        ],
      },
      {
        text: 'Actions',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Icon Button', link: '/components/icon-button' },
        ],
      },
      {
        text: 'Form',
        items: [
          { text: 'Form Field', link: '/components/form-field' },
          { text: 'Label', link: '/components/label' },
          { text: 'Text Input', link: '/components/text-input' },
          { text: 'Textarea Input', link: '/components/textarea-input' },
          { text: 'Password Input', link: '/components/password-input' },
          { text: 'Pin Input', link: '/components/pin-input' },
          { text: 'Select Input', link: '/components/select-input' },
          { text: 'Color Input', link: '/components/color-input' },
          { text: 'Color Picker', link: '/components/color-picker' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Radio', link: '/components/radio' },
          { text: 'Switch', link: '/components/switch' },
        ],
      },
      {
        text: 'Display',
        items: [
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Feedback', link: '/components/feedback' },
          { text: 'Chat Bubble', link: '/components/chat-bubble' },
          { text: 'Data Table', link: '/components/data-table' },
          { text: 'Pagination', link: '/components/pagination' },
        ],
      },
      {
        text: 'Overlay',
        items: [
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Menu', link: '/components/menu' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Tooltip', link: '/components/tooltip' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kedata-Indonesia/kedata-ui' },
    ],
  },
  vite: {
    resolve: {
      alias: {
        '@kedataindo/vue/style': join(__dirname, '../../vue/dist/style.css'),
        '@kedataindo/vue': join(__dirname, '../../vue/dist/index.js'),
        '@kedataindo/vue-icons': join(__dirname, '../../vue-icons/dist/index.js'),
      },
    },
    ssr: {
      noExternal: [
        '@kedataindo/vue',
        '@kedataindo/vue-icons',
        'tailwind-merge',
        'clsx',
        '@zag-js/vue',
        /^@zag-js\/.*/,
      ],
    },
  },
});

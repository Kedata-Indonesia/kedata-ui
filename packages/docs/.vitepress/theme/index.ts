import DefaultTheme from 'vitepress/theme';
import '@kedataindo/vue/style';
import './style.css';
import type { Theme } from 'vitepress';

export default {
  extends: DefaultTheme,
} satisfies Theme;

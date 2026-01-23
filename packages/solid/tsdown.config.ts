import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  dts: {
    compilerOptions: {
      paths: {
        '@kedataindo/slots': ['packages/slots/src/index.ts'],
        '@kedataindo/slots/*': ['packages/slots/src/*'],
        '@kedataindo/solid-icons': ['packages/solid-icons/src/index.ts'],
      },
    },
  },
  outExtensions: (ctx) => {
    return {
      js: '.esm.jsx',
      dts: '.d.ts',
    };
  },
  minify: false,
  clean: true,
  external: ['hex-rgb', 'clsx', '@zag-js', '@kedata-software'],
  treeshake: false,
  target: 'es2021',
  tsconfig: './tsconfig.build.json',
});

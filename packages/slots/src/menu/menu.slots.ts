import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import menuParts from './menu.parts';

const menuSlots = tv({
  slots: {
    root: clsx(''),
    positioner: clsx('!z-50'),
    content: clsx(
      'border border-dark-300 rounded-lg py-2.5 bg-white text-dark-900',
      'focus-visible:outline-none',
    ),
    separator: clsx('my-2.5 h-[1px] bg-dark-300'),
    item: clsx(
      'color-palette-primary group/menu-item w-full',
      'py-3 px-5 hover:bg-palette-50 cursor-pointer transition-colors min-w-[12rem]',
      'data-[highlighted]:bg-palette-50 data-[highlighted]:text-palette-600',
      'hover:bg-palette-50 hover:text-palette-600',
      'flex items-center',
    ),
    itemLabel: clsx(
      'text-dark-900 group-hover/menu-item:text-palette-700 data-[color-palette=danger]:text-danger',
      'group-hover/menu-item:data-[color-palette=danger]:text-danger',
      'group-data-[highlighted]/menu-item:text-palette-600 group-data-[highlighted]/menu-item:data-[color-palette=danger]:text-danger',
    ),
    itemStartIcon: clsx(
      'size-4 mr-2 text-dark-400 data-[color-palette="danger"]:text-danger group-hover/menu-item:text-inherit',
    ),
  },
  variants: {
    withParts: {
      true: menuParts,
    },
    darkable: {
      true: {
        content: 'dark:bg-dark-800 dark:border-dark-600 dark:text-dark-50',
        separator: 'dark:bg-dark-600',
        item: clsx(
          'dark:color-palette-dark',
          'dark:hover:bg-palette-700',
          'dark:data-[highlighted]:bg-palette-700 dark:data-[highlighted]:text-dark-50',
          'dark:hover:bg-palette-700 dark:hover:text-dark-50',
        ),
      },
    },
  },
  defaultVariants: {
    withParts: true,
    darkable: true,
  },
});

type MenuSlots = typeof menuSlots;
export type MenuIds = Partial<MenuSlots['slots']>;
export type MenuClassNames = Partial<MenuSlots['slots']>;

export default menuSlots;

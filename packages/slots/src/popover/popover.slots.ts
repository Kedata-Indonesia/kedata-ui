import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import popoverParts from './popover.parts';

const popoverSlots = tv({
  slots: {
    trigger: '',
    positioner: clsx('!z-50'),
    content: clsx(
      'rounded-lg border border-dark-300 bg-white text-dark-900 shadow-lg',
      'focus-visible:outline-none',
      'max-w-[min(100vw-2rem,24rem)]',
    ),
  },
  variants: {
    withParts: {
      true: popoverParts,
    },
    darkable: {
      true: {
        content: 'dark:bg-dark-800 dark:border-dark-600 dark:text-dark-50',
      },
    },
  },
  defaultVariants: {
    withParts: true,
    darkable: true,
  },
});

type PopoverSlots = typeof popoverSlots;
export type PopoverClassNames = Partial<PopoverSlots['slots']>;

export default popoverSlots;

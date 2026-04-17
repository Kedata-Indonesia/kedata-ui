import { DialogContextKey } from './DialogContext';
import { fadeTransitionProps } from '../animate-state-preset';
import * as dialog from '@zag-js/dialog';
import { normalizeProps, useMachine } from '@zag-js/vue';
import {
  computed,
  defineComponent,
  h,
  provide,
  Teleport,
  Transition,
  useId,
  type HTMLAttributes,
} from 'vue';
import type { WithDialogProps } from './index.types';

const withDialog = (DialogComponent: any) => {
  return defineComponent({
    name: 'WithDialog',
    props: {
      store: {
        type: Object,
        required: true,
      },
      position: {
        type: String,
        default: 'center',
      },
      paddingless: {
        type: Boolean,
        default: false,
      },
    },
    setup(props: WithDialogProps, { slots }) {
      const id = useId();
      const { store } = props;

      const isOpen = computed(() => store.isOpen.value);

      const service = useMachine(
        dialog.machine,
        computed(() => {
          return {
            id,
            restoreFocus: true,
            closeOnEscape: true,
            modal: true,
            role: 'dialog' as const,
            open: store.isOpen.value,
            onOpenChange: ({ open }) => {
              if (open) store.open();
              else store.close();
            },
          };
        }),
      );

      const api = computed(() => dialog.connect(service, normalizeProps));

      const getBackdropProps = () => {
        return {
          ...api.value.getBackdropProps(),
          hidden: undefined,
          class: 'bg-black/50 fixed inset-0 z-50',
        } as HTMLAttributes;
      };

      const getPositionerProps = () => {
        return {
          ...api.value.getPositionerProps(),
          class:
            'fixed w-full top-0 left-1/2 h-full overflow-hidden -translate-x-1/2 z-50',
          style: {
            '--tw-translate-x': '-50.1%',
          },
        } as HTMLAttributes;
      };

      provide(DialogContextKey, {
        ...props.store,
        close: () => {
          props.store.close();

          setTimeout(() => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.body.removeAttribute('data-scroll-lock');
          }, 0);
        },
        position: props.position,
        paddingless: props.paddingless,
      });

      return () => {
        return h(
          Teleport,
          { to: 'body' },
          h('div', {}, [
            h(Transition, fadeTransitionProps, () => {
              return isOpen.value ? h('div', getBackdropProps(), []) : null;
            }),
            h(Transition, fadeTransitionProps, () => {
              return isOpen.value
                ? h('div', getPositionerProps(), [h(DialogComponent)])
                : null;
            }),
          ]),
        );
      };
    },
  });
};

export default withDialog;

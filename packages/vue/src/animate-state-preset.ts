/**
 * @description
 * This is a preset for animate state. The preset name came from https://animate.style/.
 */
const animateStatePreset = {
  fade: {
    base: "",
    "enter-from": "opacity-0",
    "enter-active": "duration-150 transition-[opacity]",
    "enter-to": "opacity-100",
    "leave-from": "opacity-100",
    "leave-active": "duration-150 transition-[opacity]",
    "leave-to": "opacity-0",
  },
  fadeUp: {
    base: "",
    "enter-from": "opacity-0 translate-y-1",
    "enter-active": "duration-150 transition-[opacity,transform]",
    "enter-to": "opacity-100 translate-y-0",
    "leave-from": "opacity-100 translate-y-0",
    "leave-active": "duration-150 transition-[opacity,transform]",
    "leave-to": "opacity-0 translate-y-1",
  },
};

/**
 * Props for Vue `<Transition>` / `h(Transition, …)` — single source for fade timing and classes.
 */
export const fadeTransitionProps = {
  duration: 150,
  class: animateStatePreset.fade.base,
  enterFromClass: animateStatePreset.fade['enter-from'],
  enterActiveClass: animateStatePreset.fade['enter-active'],
  enterToClass: animateStatePreset.fade['enter-to'],
  leaveFromClass: animateStatePreset.fade['leave-from'],
  leaveActiveClass: animateStatePreset.fade['leave-active'],
  leaveToClass: animateStatePreset.fade['leave-to'],
} as const;

export default animateStatePreset;

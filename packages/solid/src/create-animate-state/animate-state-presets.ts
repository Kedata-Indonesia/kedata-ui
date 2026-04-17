/**
 * @description
 * This is a preset for animate state. The preset name came from https://animate.style/.
 */
const animateStatePreset = {
  fade: {
    base: 'duration-150 transition-[opacity]',
    'enter-from': 'opacity-0',
    'enter-active': 'opacity-100',
    'enter-to': 'opacity-100',
    'leave-from': 'opacity-100',
    'leave-active': 'opacity-0',
    'leave-to': 'opacity-0',
  },
  fadeUp: {
    base: 'duration-150 transition-[opacity,transform]',
    'enter-from': 'opacity-0 translate-y-1',
    'enter-active': 'opacity-100 translate-y-0',
    'enter-to': 'opacity-100 translate-y-0',
    'leave-from': 'opacity-100 translate-y-0',
    'leave-active': 'opacity-0 translate-y-1',
    'leave-to': 'opacity-0 translate-y-1',
  },
};

export default animateStatePreset;

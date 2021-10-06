<template>
  <button
    class="app-btn"
    :class="{
      'app-btn--lg': large,
      'app-btn--sm': small,
      'app-btn--blue': blue,
      'app-btn--red': red,
      'app-btn--green': green,
    }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      class="app-icon-svg"
    >
      <path :d="this.icon"></path>
    </svg>
  </button>
</template>

<script>
import { mdiCog, mdiTrashCanOutline, mdiMenu } from '@mdi/js';

export default {
  name: 'AppButton',
  props: {
    small: Boolean,
    large: Boolean,
    blue: Boolean,
    red: Boolean,
    green: Boolean,
  },
  data() {
    return {
      icons: {
        mdiCog,
        mdiTrashCanOutline,
        mdiMenu,
      },
    };
  },
  computed: {
    icon() {
      return this.blue
        ? this.icons.mdiCog
        : this.red
        ? this.icons.mdiTrashCanOutline
        : this.green
        ? this.icons.mdiMenu
        : null;
    },
  },
};
</script>

<style lang="scss">
.app-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--btn-size);
  height: var(--btn-size);
  border-radius: 8px;
  overflow: hidden;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color);
    opacity: 0;
    transition: opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before {
    opacity: 0.2;
  }

  &:active::before {
    opacity: 0.4;
  }

  & .app-icon-svg {
    fill: var(--color);
    font-size: var(--svg-size);
    height: var(--svg-size);
    width: var(--svg-size);
  }

  &--sm {
    --btn-size: 28px;
    --svg-size: 24px;
  }

  &--lg {
    --btn-size: 44px;
    --svg-size: 36px;
  }

  &--blue {
    --color: #2196f7;
  }

  &--red {
    --color: #f44336;
  }

  &--green {
    --color: #4caf50;
  }
}
</style>

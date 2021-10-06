<template>
  <form @submit.prevent="addCity" class="app-form">
    <fieldset
      class="app-form__fieldset"
      :class="{ 'app-form__fieldset--ekrr': errorMsg }"
    >
      <input
        type="text"
        placeholder="Enter city name"
        v-model="cityName"
        class="app-form__input"
      />
      <legend class="app-form__legend">{{ labelText }}</legend>
      <button type="submit" class="app-form__button">{{ buttonText }}</button>
    </fieldset>
    <span class="app-form__error" v-if="errorMsg">{{ errorMsg }}</span>
  </form>
</template>

<script>
import { mdiMapMarker } from '@mdi/js';

export default {
  name: 'AppInput',
  props: {
    buttonText: String,
    labelText: String,
  },
  data() {
    return {
      cityName: '',
      icons: {
        mdiMapMarker,
      },
    };
  },
  computed: {
    errorMsg() {
      return this.$store.getters.errorMsg;
    },
  },
  watch: {
    cityName(newVal, oldVal) {
      if (this.errorMsg && newVal !== oldVal) {
        this.$store.commit('UNSET_ERROR');
      }
    },
  },
  methods: {
    addCity() {
      this.$store.dispatch('checkCityAvailability', this.cityName);
      if (this.errorMsg === '') {
        this.cityName = '';
      }
    },
  },
};
</script>

<style lang="scss">
.app-form {
  width: 100%;
  height: 86px;
  margin-top: 10px;

  &__fieldset {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 10px;
    border-color: #555;
    border-radius: 4px;

    transition-property: border;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.5, 1);
    transition-delay: 0.1s;

    &:hover {
      border-color: #999;
    }

    &:focus-within {
      color: #9c27b0;
      border-color: #9c27b0;
    }

    &:focus-within .app-form__legend {
      box-shadow: 0 0 0 4px #121212;
      transform: translate(-14px, -28px) scale(0.8);
    }

    &--ekrr {
      border-color: #ff5252 !important;

      & .app-form__legend {
        color: #ff5252;
      }

      & .app-form__input {
        caret-color: #ff5252;
      }
    }
  }

  &__legend {
    position: absolute;
    left: 10px;
    top: 14px;
    background-color: #121212;
    transition-property: color transform box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.5, 1);
    transition-delay: 0s;
    pointer-events: none;
  }

  &__input {
    color: #ffffff;
    border: none;
    caret-color: #9c27b0;
    background-color: #121212;

    &::placeholder {
      color: #121212;
    }

    &:focus {
      outline: none;
    }

    &:focus::placeholder {
      color: #888;
    }

    &:not(:placeholder-shown):not(:focus) + .app-form__legend {
      box-shadow: 0 0 0 4px #121212;
      transform: translate(-14px, -28px) scale(0.8);
    }
  }

  &__button {
    height: 28px;
    min-width: 50px;
    padding: 0 4px;
    border: 1px solid #ff9800;
    color: #ff9800;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;
    transition-duration: 0.28s;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: rgba(255, 152, 0, 0.1);
    }

    &:active {
      background-color: rgba(255, 152, 0, 0.3);
    }
  }

  &__error {
    color: #ff5252;
    font-size: 13px;
    text-align: left;
  }
}
</style>

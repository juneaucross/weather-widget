<template>
  <section class="greeting">
    <span class="greeting__heading">Hi there!</span>
    <app-input :buttonText="buttonText" :labelText="labelText" />
  </section>
</template>

<script>
import AppInput from './AppInput.vue';

export default {
  name: 'AppGreeting',
  components: {
    AppInput,
  },
  data() {
    return {
      labelText: 'Where are you now?',
      buttonText: "I'm here!",
    };
  },
};
</script>

<style lang="scss">
.greeting {
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  &__heading {
    font-size: 32px;
    margin-bottom: 20px;
  }
}
</style>

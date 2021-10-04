<template>
  <section class="greeting">
    <h1 class="title is-3 has-text-grey-lighter">Hi there!</h1>
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
      buttonText: "I'm here!",
      labelText: 'Where are you now?',
    };
  },
};
</script>

<style>
.greeting {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}
</style>

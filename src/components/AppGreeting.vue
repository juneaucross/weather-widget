<template>
  <section class="greeting">
    <h4 class="grey--text text--lighten-1 text-h4 mb-5">Hi there!</h4>
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

<style>
.greeting {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}
</style>

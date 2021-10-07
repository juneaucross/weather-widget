<template>
  <section class="settings">
    <app-input :buttonText="buttonText" :labelText="labelText" />
    <draggable
      v-model="citiesList"
      tag="ul"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
      handle=".grab"
      class="list-group"
    >
      <transition-group>
        <li class="list-group-item" v-for="(city, i) in citiesList" :key="city">
          <div class="settings__list-item">
            <button
              rounded
              class="button is-danger"
              size="is-small"
              @click="removeCity(i)"
            >
              <b-icon icon="trash-can-outline" size="is-medium"></b-icon>
            </button>
            <span class="settings__list-item-name">{{ city }}</span>
            <button class="grab button is-success" size="is-small">
              <b-icon icon="menu" size="is-medium"></b-icon>
            </button>
          </div>
        </li>
      </transition-group>
    </draggable>
  </section>
</template>

<script>
import AppInput from './AppInput.vue';
import draggable from 'vuedraggable';

export default {
  name: 'AppSettings',
  components: {
    AppInput,
    draggable,
  },
  data() {
    return {
      labelText: 'Add new one?',
      buttonText: 'Yeah!',
      drag: false,
    };
  },
  methods: {
    removeCity(i) {
      this.citiesList.splice(i, 1);
      this.$store.dispatch('updateCitiesList', this.citiesList);

      if (this.citiesList.length < 1) {
        this.$store.commit('TOGGLE_SETTINGS');
      }
    },
  },
  computed: {
    citiesList: {
      get() {
        return this.$store.state.citiesList;
      },
      set(list) {
        this.$store.dispatch('updateCitiesList', list);
      },
    },
    dragOptions() {
      return {
        animation: 200,
        // group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
};
</script>

<style lang="scss">
.list-group::-webkit-scrollbar {
  display: none;
}

.settings__list-item {
  display: flex;
  justify-content: space-between;
  height: 53px;
  padding: 11px 16px;
  background-color: #1c1c1e;
  color: #ffffff;
  font-size: 17px;
  border: 1px solid #38383a;
  border-left-width: 2px;
  border-right-width: 2px;
}

.list-group-item:first-child .settings__list-item {
  border-top-width: 2px;
}

.list-group-item:last-child .settings__list-item {
  border-bottom-width: 2px;
}

.grab {
  cursor: grab !important;
}

.grab:active {
  cursor: grabbing !important;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 60px;
  height: 320px;
  overflow-y: auto;
}
</style>

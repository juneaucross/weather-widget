import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    citiesList: [],
    currentWeatherArr: [],
    errorMsg: '',
    isLoading: false,
    isSettings: false,
  },
  mutations: {
    ADD_CITY(state, cityName) {
      state.citiesList.push(cityName);
    },
    ADD_WEATHER(state, payload) {
      state.currentWeatherArr.push(payload);
    },
    CLEAR_WEATHER_ARR(state) {
      state.currentWeatherArr = [];
    },
    GET_LOCAL_CITIES_LIST(state) {
      if (localStorage.citiesList) {
        state.citiesList = JSON.parse(localStorage.getItem('citiesList'));
      }
    },
    UPDATE_CITIES_LIST(state, payload) {
      state.citiesList = payload;
    },
    SET_ERROR(state, payload) {
      state.errorMsg = payload;
    },
    UNSET_ERROR(state) {
      state.errorMsg = '';
    },
    TOGGLE_SETTINGS(state) {
      state.isSettings = !state.isSettings;
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    checkCityAvailability({ commit, getters }, cityName) {
      const cityWeather = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.VUE_APP_APIKEY}`
      );
      cityWeather
        .then((res) => {
          if (res.ok) {
            return res;
          } else {
            commit('SET_ERROR', "Can't find it :( Try again!");
            throw new Error(res.statusText);
          }
        })
        .then((res) => res.json())
        .then((data) => {
          if (
            getters.lowCaseCitiesList.indexOf(cityName.toLowerCase()) === -1
          ) {
            commit('ADD_CITY', data.name);
            localStorage.setItem(
              'citiesList',
              JSON.stringify(getters.citiesList)
            );
          } else {
            commit('SET_ERROR', 'This one is already in the list.');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getCurrentWeatherArr({ commit, getters }) {
      commit('CLEAR_WEATHER_ARR');
      commit('SET_LOADING', true);
      getters.citiesList.forEach((city) => {
        const currentWeather = fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.VUE_APP_APIKEY}`
        );
        currentWeather
          .then((res) => res.json())
          .then((data) => {
            commit('ADD_WEATHER', data);
            commit('SET_LOADING', false);
          })
          .catch((err) => console.error(err));
      });
    },
    updateCitiesList({ getters, commit }, payload) {
      commit('UPDATE_CITIES_LIST', payload);
      localStorage.setItem('citiesList', JSON.stringify(getters.citiesList));
    },
  },
  getters: {
    citiesList: (state) => state.citiesList,
    currentWeatherArr: (state) => state.currentWeatherArr,
    sortedWeatherArr: (state, getters) => {
      return state.currentWeatherArr.sort((a, b) => {
        const A = a['name'].toLowerCase();
        const B = b['name'].toLowerCase();

        return getters.lowCaseCitiesList.indexOf(A) >
          getters.lowCaseCitiesList.indexOf(B)
          ? 1
          : -1;
      });
    },
    lowCaseCitiesList: (state) => {
      return state.citiesList.map((city) => city.toLowerCase());
    },
    errorMsg: (state) => state.errorMsg,
    isSettings: (state) => state.isSettings,
    isLoading: (state) => state.isLoading,
  },
});

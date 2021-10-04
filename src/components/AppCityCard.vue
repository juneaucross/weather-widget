<template>
  <li class="cards-list-item">
    <v-skeleton-loader
      v-if="isLoading"
      class="mx-auto mt-3"
      max-width="285"
      height="204.5"
      type="card"
    ></v-skeleton-loader>

    <div class="city-card" v-else>
      <div class="city-card__row city-card__row--name">
        <span class="city-card__name">
          {{ currentWeather.name }}, {{ currentWeather.sys.country }}</span
        >
        <span class="city-card__description">
          {{ currentWeather.weather[0].description }}
        </span>
      </div>

      <div class="city-card__row city-card__row--center">
        <div class="city-card__col">
          <img
            :src="`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`"
            :alt="currentWeather.weather[0].main"
            class="city-card__icon"
            width="60"
            height="60"
          />
        </div>

        <div class="city-card__col">
          <span class="city-card__temperature">
            {{ Math.floor(currentWeather.main.temp) }}&#176;C
          </span>
        </div>
      </div>

      <div class="city-card__row city-card__row--info">
        <div class="city-card__col">
          <span class="city-card__feelslike">
            Feels like:
            {{ Math.floor(currentWeather.main.feels_like) }}&#176;C
          </span>

          <span class="city-card__wind" title="Wind">
            <v-icon aria-label="Wind" role="img" aria-hidden="false" small>
              {{ icons.mdiWeatherWindy }}
            </v-icon>
            {{ currentWeather.wind.speed.toFixed(1) }}m/s |
            {{ getCardinal(currentWeather.wind.deg) }}
          </span>

          <span class="city-card__humidity" title="Humidity">
            <v-icon aria-label="Humidity" role="img" aria-hidden="false" small>
              {{ icons.mdiWater }}
            </v-icon>
            {{ currentWeather.main.humidity }}%
          </span>
        </div>

        <div class="city-card__col">
          <span class="city-card__dewpoint">
            Dew point: {{ dewPoint }}&#176;C
          </span>

          <span class="city-card__pressure" title="Pressure">
            <v-icon aria-label="Pressure" role="img" aria-hidden="false" small>
              {{ icons.mdiGauge }}
            </v-icon>
            {{ currentWeather.main.pressure }}hPa
          </span>

          <span class="city-card__visibility" title="Visibility">
            <v-icon
              aria-label="Visibility"
              role="img"
              aria-hidden="false"
              small
            >
              {{ icons.mdiEye }}
            </v-icon>
            {{ (currentWeather.visibility / 1000).toFixed(1) }}km
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mdiWeatherWindy, mdiWater, mdiGauge, mdiEye } from '@mdi/js';

export default {
  name: 'AppCityCard',
  props: {
    currentWeather: Object,
  },
  data() {
    return {
      icons: {
        mdiWeatherWindy,
        mdiWater,
        mdiGauge,
        mdiEye,
      },
    };
  },
  methods: {
    getCardinal(angle) {
      // © https://gist.github.com/basarat/4670200
      const degreePerDirection = 360 / 8;
      const offsetAngle = angle + degreePerDirection / 2;

      return offsetAngle >= 0 * degreePerDirection &&
        offsetAngle < 1 * degreePerDirection
        ? 'N'
        : offsetAngle >= 1 * degreePerDirection &&
          offsetAngle < 2 * degreePerDirection
        ? 'NE'
        : offsetAngle >= 2 * degreePerDirection &&
          offsetAngle < 3 * degreePerDirection
        ? 'E'
        : offsetAngle >= 3 * degreePerDirection &&
          offsetAngle < 4 * degreePerDirection
        ? 'SE'
        : offsetAngle >= 4 * degreePerDirection &&
          offsetAngle < 5 * degreePerDirection
        ? 'S'
        : offsetAngle >= 5 * degreePerDirection &&
          offsetAngle < 6 * degreePerDirection
        ? 'SW'
        : offsetAngle >= 6 * degreePerDirection &&
          offsetAngle < 7 * degreePerDirection
        ? 'W'
        : 'NW';
    },
  },
  computed: {
    dewPoint() {
      //© http://iridl.ldeo.columbia.edu/dochelp/QA/Basic/dewpoint.html
      return (
        this.currentWeather.main.temp -
        (100 - this.currentWeather.main.humidity) / 5
      ).toFixed(0);
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style lang="scss">
.city-card {
  margin: 10px 0 0;
  padding: 25px 20px;
  border-radius: 13px;
  color: #ffffff;

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    align-items: center;

    &--name {
      justify-content: space-between;
    }

    &--info {
      margin-top: 7px;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 13px;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }

  &__icon {
    width: 65px;
    height: 65px;
  }

  &__description,
  &__name {
    font-size: 16px;
  }

  &__temperature {
    font-size: 30px;
    text-align: center;
  }
}

.cards-list-item:nth-child(1n) .city-card {
  background-image: linear-gradient(
    rgb(87, 17, 92) 0.12%,
    rgb(93, 25, 99) 100%
  );
}

.cards-list-item:nth-child(2n) .city-card {
  background-image: linear-gradient(
    rgb(34, 5, 94) 0.12%,
    rgb(41, 12, 101) 100%
  );
}

.cards-list-item:nth-child(3n) .city-card {
  background-image: linear-gradient(
    rgb(16, 54, 99) 0.12%,
    rgb(23, 59, 105) 100%
  );
}

v-skeleton-loader:nth-child(1n) {
  animation-delay: 1.3s !important;
  background-image: linear-gradient(
    90deg,
    rgb(87, 17, 92) 25%,
    rgb(110, 110, 110) 50%,
    rgb(87, 17, 92) 75%
  ) !important;
}
</style>

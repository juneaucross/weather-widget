<template>
  <li class="cards-list-item">
    <div class="city-card">
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
          <span class="city-card__info-span">
            Feels like:
            {{ Math.floor(currentWeather.main.feels_like) }}&#176;C
          </span>

          <span class="city-card__info-span" title="Wind">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="false"
              aria-label="Wind"
              width="13"
              height="13"
              class="city-card__svg"
            >
              <path :d="icons.mdiWeatherWindy"></path>
            </svg>
            {{ currentWeather.wind.speed.toFixed(1) }}m/s |
            {{ getCardinal(currentWeather.wind.deg) }}
          </span>

          <span class="city-card__info-span" title="Humidity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="false"
              aria-label="Humidity"
              width="13"
              height="13"
              class="city-card__svg"
            >
              <path :d="icons.mdiWater"></path>
            </svg>
            {{ currentWeather.main.humidity }}%
          </span>
        </div>

        <div class="city-card__col">
          <span class="city-card__info-span">
            Dew point: {{ dewPoint }}&#176;C
          </span>

          <span class="city-card__info-span" title="Pressure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="false"
              aria-label="Pressure"
              width="13"
              height="13"
              class="city-card__svg"
            >
              <path :d="icons.mdiGauge"></path>
            </svg>
            {{ currentWeather.main.pressure }}hPa
          </span>

          <span class="city-card__info-span" title="Visibility">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="false"
              aria-label="Visibility"
              width="13"
              height="13"
              class="city-card__svg"
            >
              <path :d="icons.mdiEye"></path>
            </svg>
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
  margin: 12px 0 0;
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

  &__info-span {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__svg {
    width: 13px;
    height: 13px;
    margin-right: 3px;
    fill: currentColor;
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
  background-image: linear-gradient(#57115c 0.12%, #5d1963 100%);
}

.cards-list-item:nth-child(2n) .city-card {
  background-image: linear-gradient(#22055e 0.12%, #290c65 100%);
}

.cards-list-item:nth-child(3n) .city-card {
  background-image: linear-gradient(#103663 0.12%, #173b69 100%);
}
</style>

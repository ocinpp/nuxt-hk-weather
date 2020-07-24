<template>
  <div>
    <div
      v-for="weatherForecast of weatherForecasts"
      :key="weatherForecast.forecastDate"
      class="mw9 center bt b--dark-pink"
    >
      <div class="cf ph2-ns">
        <div class="fl w-40 w-20-m w-20-l pa3 word-wrap">
          {{ weatherForecast.forecastDate | formatDate }}
        </div>
        <div class="fl w-20 w-20-m w-10-l pa3 tc">
          <img width="60" :src="getImage(weatherForecast.ForecastIcon)" />
        </div>
        <div class="fl w-40 w-30-m w-20-l pa3 word-wrap tc">
          {{ weatherForecast.forecastMintemp.value }}
          {{ weatherForecast.forecastMintemp.unit }} /
          {{ weatherForecast.forecastMaxtemp.value }}
          {{ weatherForecast.forecastMaxtemp.unit }}
        </div>
        <div class="fl w-100 w-30-m w-50-l pa3 word-wrap">
          {{ weatherForecast.forecastWeather }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherForecasts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getImage(icon) {
      return `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${icon}.png`
    },
  },
}
</script>

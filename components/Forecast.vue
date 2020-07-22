<template>
  <div>
    <div
      v-for="weatherForecast of weatherForecasts"
      :key="weatherForecast.forecastDate"
      class="mw9 center bt b--dark-pink"
    >
      <div class="cf ph2-ns">
        <div class="fl w-50 w-20-m w-20-l pa3 word-wrap">
          {{ weatherForecast.forecastDate | formatDate }}
        </div>
        <div class="fl w-50 w-30-m w-20-l pa3 word-wrap">
          {{ weatherForecast.forecastMintemp.value }}
          {{ weatherForecast.forecastMintemp.unit }} /
          {{ weatherForecast.forecastMaxtemp.value }}
          {{ weatherForecast.forecastMaxtemp.unit }}
        </div>
        <div class="fl w-100 w-50-m w-60-l pa3 word-wrap">
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
}
</script>

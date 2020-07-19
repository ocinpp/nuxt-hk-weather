<template>
  <div class="pa4">
    <div class="w-100 mw8 center">
      <h1 class="f4 white pv2 ph3">{{ title }}</h1>
      <div class="ph3 bt b--purple">
        <p class="f5 lh-copy mv4 white">{{ generalSituation }}</p>
      </div>
      <div>
        <h2 class="f5 white pv2 ph3">{{ forecast }}</h2>
      </div>
      <div>
        <div
          v-for="weatherForecast of weatherForecasts"
          :key="weatherForecast.forecastDate"
          class="mw9 center ph3-ns white bt b--dark-pink"
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
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    const res = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en'
    )
    return {
      generalSituation: res.data.generalSituation,
      weatherForecasts: res.data.weatherForecast,
    }
  },
  data() {
    return {
      title: 'Hong Kong Weather Forecast',
      forecast: '9 Day Forecast',
    }
  },
}
</script>

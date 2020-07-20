<template>
  <div class="pa3">
    <div class="w-100 mw8 center">
      <div class="white pv2 bb b--purple">
        <h1 class="f3">{{ title }}</h1>
      </div>
      <div class="white pv1 tr">
        <div class="f7">Last updated: {{ updateDateTime | formatISODate }}</div>
      </div>
      <div class="white f3 mv3 cf">
        <div class="w-20-ns w-30 fl">
          {{ currentTemperature.value }}
          {{ currentTemperature.unit }}
        </div>
        <div class="w-80-ns w-70 fr">
          {{ currentTemperature.place }}
        </div>
      </div>
      <div class="white pv2">
        <h2 class="f4">{{ forecast }}</h2>
      </div>
      <div class="bt b--dark-pink white">
        <p class="lh-copy mv3">{{ generalSituation }}</p>
      </div>
      <div>
        <div
          v-for="weatherForecast of weatherForecasts"
          :key="weatherForecast.forecastDate"
          class="mw9 center white bt b--dark-pink"
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
    // https://www.hko.gov.hk/en/abouthko/opendata_intro.htm
    const resForecast = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en'
    )

    const resWeather = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en'
    )

    return {
      generalSituation: resForecast.data.generalSituation,
      weatherForecasts: resForecast.data.weatherForecast,
      currentTemperature: resWeather.data.temperature.data.find(
        (x) => x.place === 'Hong Kong Observatory'
      ),
      updateDateTime: resWeather.data.temperature.recordTime,
    }
  },
  data() {
    return {
      title: 'Hong Kong Weather',
      forecast: '9-Day Weather Forecast',
    }
  },
}
</script>

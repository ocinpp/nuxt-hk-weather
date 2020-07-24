<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ title }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">Last updated: {{ updateDateTime | formatISODate }}</div>
    </div>
    <current-temperature
      :temperature="currentTemperature"
    ></current-temperature>
    <div class="pv2">
      <h2 class="f4">{{ forecast }}</h2>
    </div>
    <div class="bt b--dark-pink">
      <p class="lh-copy mv3">{{ generalSituation }}</p>
    </div>
    <forecast :weather-forecasts="weatherForecasts"></forecast>
  </div>
</template>

<script>
export default {
  // called every time before loading the component
  // as the name said, it can be async
  // Also, the returned object will be merged with your data object
  async asyncData({ $axios }) {
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

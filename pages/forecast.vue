<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ title }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">Last updated: {{ '' | formatISODate }}</div>
    </div>
    <div class="pv1">
      <h2 class="f4">{{ heading }}</h2>
    </div>
    <div>
      <p class="lh-copy mv2">{{ generalSituation }}</p>
    </div>
    <forecast :weather-forecasts="weatherForecasts"></forecast>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // https://www.hko.gov.hk/en/abouthko/opendata_intro.htm
    const resForecast = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en'
    )

    return {
      generalSituation: resForecast.data.generalSituation,
      weatherForecasts: resForecast.data.weatherForecast,
      updateDateTime: resForecast.data.updateTime,
    }
  },
  data() {
    return {
      title: '9-Day Weather Forecast',
      heading: 'General Situation',
    }
  },
}
</script>

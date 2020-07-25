<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ title }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">Last updated: {{ updateDateTime | formatISODate }}</div>
    </div>
    <current-weather :weather="currentWeather"></current-weather>
    <current-report :report="currentReport"></current-report>
  </div>
</template>

<script>
export default {
  // called every time before loading the component
  // as the name said, it can be async
  // Also, the returned object will be merged with your data object
  async asyncData({ $axios }) {
    // https://www.hko.gov.hk/en/abouthko/opendata_intro.htm
    const resWeather = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en'
    )

    const resCurrentReport = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en'
    )

    return {
      currentWeather: {
        // 1 is Hong Kong Observatory
        temperature: resWeather.data.temperature.data[1],
        weatherIcons: resWeather.data.icon,
        warningMessages: resWeather.data.warningMessage,
      },
      currentReport: resCurrentReport.data,
      updateDateTime: resWeather.data.updateTime,
    }
  },
  data() {
    return {
      title: 'Hong Kong Weather',
    }
  },
}
</script>

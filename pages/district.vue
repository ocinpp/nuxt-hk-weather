<template>
  <div class="pa3">
    <div class="w-100 mw8 center">
      <div class="pv2 bb b--purple">
        <h1 class="f3">{{ title }}</h1>
      </div>
      <div class="pv2 tr">
        <div class="f7">Last updated: {{ updateDateTime | formatISODate }}</div>
      </div>
      <div class="pv2">
        <district-weather :districts="districts"></district-weather>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // https://www.hko.gov.hk/en/abouthko/opendata_intro.htm
    const resWeather = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en'
    )

    return {
      districts: resWeather.data.temperature.data,
      updateDateTime: resWeather.data.temperature.recordTime,
    }
  },
  data() {
    return {
      title: 'District Weather',
    }
  },
}
</script>

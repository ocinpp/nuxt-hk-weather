<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ title }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">Last updated: {{ updateDateTime | formatISODate }}</div>
    </div>
    <div class="pv2">
      <district-weather :id="id" :districts="districts"></district-weather>
    </div>
  </div>
</template>

<script>
import { baseApiUrl } from '../variables.js'

export default {
  async asyncData({ $axios }) {
    const resWeather = await $axios.get(
      baseApiUrl + '?dataType=rhrread&lang=en'
    )

    return {
      id: 'district-weather',
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

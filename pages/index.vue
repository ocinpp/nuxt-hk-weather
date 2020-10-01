<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ $t('title') }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">
        {{ $t('last_updated') }}: {{ updateDateTime | formatISODate }}
      </div>
    </div>
    <current-weather :weather="currentWeather"></current-weather>
    <current-report :report="currentReport"></current-report>
  </div>
</template>

<script>
import { baseApiUrl } from '../variables.js'

export default {
  // called every time before loading the component
  // as the name said, it can be async
  // Also, the returned object will be merged with your data object
  async asyncData({ $axios, app }) {
    const resWeather = await $axios.get(
      baseApiUrl + `?dataType=rhrread&lang=${app.i18n.locale}`
    )

    const resCurrentReport = await $axios.get(
      baseApiUrl + `?dataType=flw&lang=${app.i18n.locale}`
    )

    return {
      currentWeather: {
        // index 1 is Hong Kong Observatory
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

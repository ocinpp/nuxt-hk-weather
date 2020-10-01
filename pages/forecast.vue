<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ $t('nine_day_forecast') }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">
        {{ $t('last_updated') }}: {{ updateDateTime | formatISODate }}
      </div>
    </div>
    <div class="pv1">
      <h2 class="f4">{{ $t('general_situation') }}</h2>
    </div>
    <div>
      <p class="lh-copy mv2">{{ generalSituation | prettyDescription }}</p>
    </div>
    <forecast
      :id="id"
      :weather-forecasts="weatherForecasts"
      :locale="$i18n.locale"
    ></forecast>
  </div>
</template>

<script>
import { baseApiUrl } from '../variables.js'

export default {
  async asyncData({ $axios, app }) {
    const resForecast = await $axios.get(
      baseApiUrl + `?dataType=fnd&lang=${app.i18n.locale}`
    )

    return {
      generalSituation: resForecast.data.generalSituation,
      weatherForecasts: resForecast.data.weatherForecast,
      updateDateTime: resForecast.data.updateTime,
    }
  },
  data() {
    return {
      id: 'weather-forecast',
      title: '9-Day Weather Forecast',
      heading: 'General Situation',
    }
  },
}
</script>

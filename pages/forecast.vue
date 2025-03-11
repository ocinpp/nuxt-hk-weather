<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ $t('nine_day_forecast') }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">
        {{ $t('last_updated') }}:
        {{ formatISODate(updateDateTime, locale.code) }}
      </div>
    </div>
    <div class="pv1">
      <h2 class="f4">{{ $t('general_situation') }}</h2>
    </div>
    <div>
      <p class="lh-copy mv2">{{ prettyDescription(generalSituation) }}</p>
    </div>
    <Forecast :id="id" :weather-forecasts="weatherForecasts" />
  </div>
</template>

<script setup>
import { baseApiUrl } from '../variables.js'
import { formatISODate, prettyDescription } from '@/utils/formatUtils'

const { locale } = useI18n()

const generalSituation = ref(null)
const weatherForecasts = ref(null)
const updateDateTime = ref(null)
const id = ref('weather-forecast')

const { data: resForecast } = await useFetch(
  baseApiUrl + `?dataType=fnd&lang=${locale.value}`
)

generalSituation.value = resForecast.value.generalSituation
weatherForecasts.value = resForecast.value.weatherForecast
updateDateTime.value = resForecast.value.updateTime
</script>

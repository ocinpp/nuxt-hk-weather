<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ $t('nine_day_forecast') }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">
        {{ $t('last_updated') }}:
        {{ formatISODate(updateDateTime, pagelocale) }}
      </div>
    </div>
    <div class="pv1">
      <h2 class="f4">{{ $t('general_situation') }}</h2>
    </div>
    <div>
      <p class="lh-copy mv2">{{ prettyDescription(generalSituation) }}</p>
    </div>
    <WeatherForecast :id="id" :weather-forecasts="weatherForecasts" />
  </div>
</template>

<script setup>
import { baseApiUrl } from '../variables.js'
import { formatISODate, prettyDescription } from '@/utils/formatUtils'

const { locale } = useI18n()
const pagelocale = locale.value
const id = 'weather-forecast'

const { data: resForecast } = await useFetch(
  baseApiUrl + `?dataType=fnd&lang=${locale.value}`
)

const generalSituation = resForecast.value.generalSituation
const weatherForecasts = resForecast.value.weatherForecast
const updateDateTime = resForecast.value.updateTime
</script>

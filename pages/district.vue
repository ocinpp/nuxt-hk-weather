<script setup>
import { baseApiUrl } from '../variables.js'
import { formatISODate } from '@/utils/formatUtils'

const { locale } = useI18n()
const pagelocale = locale.value
const id = 'district-weather'

const { data: resWeather } = await useFetch(
  baseApiUrl + `?dataType=rhrread&lang=${locale.value}`
)

const districts = resWeather.value.temperature.data
const updateDateTime = resWeather.value.temperature.recordTime
</script>

<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ $t('district_weather') }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">
        {{ $t('last_updated') }}:
        {{ formatISODate(updateDateTime, pagelocale) }}
      </div>
    </div>
    <div class="pv2">
      <DistrictWeather :id="id" :districts="districts" />
    </div>
  </div>
</template>

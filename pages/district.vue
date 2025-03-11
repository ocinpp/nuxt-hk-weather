<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ $t('district_weather') }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">
        {{ $t('last_updated') }}:
        {{ formatISODate(updateDateTime, locale.code) }}
      </div>
    </div>
    <div class="pv2">
      <DistrictWeather :id="id" :districts="districts" />
    </div>
  </div>
</template>

<script setup>
import { baseApiUrl } from '../variables.js'
import { formatISODate } from '@/utils/formatUtils'

const { locale } = useI18n()
const districts = ref([])
const updateDateTime = ref(null)
const id = ref('district-weather')

const { data: resWeather } = await useFetch(
  baseApiUrl + `?dataType=rhrread&lang=${locale.value}`
)

districts.value = resWeather.value.temperature.data
updateDateTime.value = resWeather.value.temperature.recordTime
</script>

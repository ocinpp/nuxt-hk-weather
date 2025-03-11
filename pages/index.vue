<template>
  <div>
    <div class="pv2 bb b--purple">
      <h1 class="f3">{{ $t('title') }}</h1>
    </div>
    <div class="pv1 tr">
      <div class="f7">
        {{ $t('last_updated') }}:
        {{ formatISODate(updateDateTime, locale.value) }}
      </div>
    </div>
    <CurrentWeather :weather="currentWeather" />
    <CurrentReport :report="currentReport" />
  </div>
</template>

<script setup>
import { baseApiUrl } from '../variables.js'
import { formatISODate } from '@/utils/formatUtils'

const { locale } = useI18n()
const currentReport = ref(null)
const updateDateTime = ref(null)
const currentWeather = shallowRef({
  temperature: null,
  weatherIcons: null,
  warningMessages: null,
})

const { data: resWeather } = await useFetch(
  baseApiUrl + `?dataType=rhrread&lang=${locale.value}`
)
const { data: resCurrentReport } = await useFetch(
  baseApiUrl + `?dataType=flw&lang=${locale.value}`
)

currentWeather.value = {
  // index 1 is Hong Kong Observatory
  temperature: resWeather.value.temperature.data[1],
  weatherIcons: resWeather.value.icon,
  warningMessages: resWeather.value.warningMessage,
}
currentReport.value = resCurrentReport.value
updateDateTime.value = resWeather.value.updateTime
</script>

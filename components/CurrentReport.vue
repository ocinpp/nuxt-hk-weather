<template>
  <div class="cf">
    <div class="pv0">
      <h2 class="f4">{{ $t('general_situation') }}</h2>
    </div>
    <div class="bb b--dark-pink pb3 lh-copy">
      {{ prettyDescription(report.generalSituation, locale.value) }}
    </div>
    <div class="pv0">
      <h2 class="f4">{{ report.forecastPeriod }}</h2>
    </div>
    <div class="bb b--dark-pink pb3 lh-copy">
      {{ prettyDescription(report.forecastDesc, locale.value) }}
    </div>
    <div class="pv0">
      <h2 class="f4">{{ $t('outlook') }}</h2>
    </div>
    <div class="bb b--dark-pink pb3 lh-copy">
      {{ prettyDescription(report.outlook, locale.value) }}
    </div>
  </div>
</template>

<script setup>
import { prettyDescription } from '@/utils/formatUtils'

const { locale } = useI18n()

defineProps({
  report: {
    type: Object,
    default: () => ({
      generalSituation: 'N/A',
      forecastPeriod: 'N/A',
      forecastDesc: 'N/A',
      outlook: 'N/A',
    }),
  },
})
</script>

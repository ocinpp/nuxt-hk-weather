<template>
  <div class="cf">
    <div class="pv0">
      <h2 class="f4">{{ $t('general_situation') }}</h2>
    </div>
    <div class="bb b--dark-pink pb3 lh-copy">
      {{ report.generalSituation | prettyDescription }}
    </div>
    <div class="pv0">
      <h2 class="f4">{{ report.forecastPeriod }}</h2>
    </div>
    <div class="bb b--dark-pink pb3 lh-copy">
      {{ report.forecastDesc | prettyDescription }}
    </div>
    <div class="pv0">
      <h2 class="f4">{{ $t('outlook') }}</h2>
    </div>
    <div class="bb b--dark-pink pb3 lh-copy">
      {{ report.outlook | prettyDescription }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    report: {
      type: Object,
      default: () => ({
        generalSituation: 'N/A',
        forecastPeriod: 'N/A',
        forecastDesc: 'N/A',
        outlook: 'N/A',
      }),
    },
  },
}
</script>

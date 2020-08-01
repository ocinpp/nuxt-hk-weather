<template>
  <div class="cf">
    <div class="pv0">
      <h2 class="f4">{{ heading }}</h2>
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
      <h2 class="f4">{{ heading2 }}</h2>
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
  data() {
    return {
      heading: 'General Situation',
      heading2: 'Outlook',
    }
  },
}
</script>

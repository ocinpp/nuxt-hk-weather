<template>
  <div class="cf">
    <div class="pv1">
      <h2 class="f4">{{ heading }}</h2>
    </div>
    <div class="bb b--pink pv2 lh-copy">
      {{ report.generalSituation }}
    </div>
    <div class="pv1">
      <h2 class="f4">{{ report.forecastPeriod }}</h2>
    </div>
    <div class="bb b--pink pv2 lh-copy">
      {{ report.forecastDesc }}
    </div>
    <!-- <div class="bb b--pink pv3">
      {{ weather.outlook }}
    </div> -->
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
    }
  },
}
</script>

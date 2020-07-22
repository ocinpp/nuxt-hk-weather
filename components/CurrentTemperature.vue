<template>
  <div class="f3 mv3 cf">
    <div class="w-20-ns w-30 fl">
      {{ temperature.value }}
      {{ temperature.unit }}
    </div>
    <div class="w-80-ns w-70 fr">
      {{ temperature.place }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    temperature: {
      type: Object,
      default: () => ({
        value: 'N/A',
        unit: 'N/A',
        place: 'N/A',
      }),
    },
  },
}
</script>

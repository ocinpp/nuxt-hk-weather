<template>
  <div>
    <div class="f2 mv3 cf">
      <div class="w-20 w-10-l fl tc">
        <div v-for="icon of weather.weatherIcons" :key="icon.index">
          <img width="80" :src="getImage(icon)" />
        </div>
      </div>
      <div class="w-30 w-20-l fl tc">
        {{ weather.temperature.value }}
        {{ weather.temperature.unit }}
      </div>
      <div class="w-50 w-70-l fl">
        {{ weather.temperature.place }}
      </div>
    </div>
    <div class="mv3 cf">
      <div class="w-70 w-80-l f4 fl">
        <div
          v-for="message of weather.warningMessages"
          :key="message.index"
          class="pb2"
        >
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      default: () => ({
        temperature: {
          value: 'N/A',
          unit: 'N/A',
          place: 'N/A',
        },
        weatherIcons: [],
        warningMessages: [],
      }),
    },
  },
  methods: {
    getImage(icon) {
      return `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${icon}.png`
    },
  },
}
</script>

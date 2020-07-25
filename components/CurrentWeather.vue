<template>
  <div>
    <div class="f2 mv3 cf">
      <div class="w-30 w-20-l fl tc">
        {{ weather.temperature.value }}
        {{ weather.temperature.unit }}
      </div>
      <div class="w-70 w-80-l fl">
        {{ weather.temperature.place }}
      </div>
    </div>
    <div class="mv3 cf">
      <div class="w-30 w-20-l fl tc">
        <div v-for="icon of weather.weatherIcons" :key="icon.index">
          <img width="90" :src="getImage(icon)" />
        </div>
      </div>
      <div
        v-for="message of weather.warningMessages"
        :key="message.index"
        class="w-70 w-80-l f4 fl"
      >
        {{ message }}
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

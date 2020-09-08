<template>
  <div :id="id">
    <div
      v-for="district of districts"
      :key="district.place"
      class="mw9 center bb b--dark-pink"
    >
      <div class="cf ph2-ns">
        <div class="fl w-80 pa3 word-wrap">{{ district.place }}</div>
        <div class="fl w-20 pa3 word-wrap tr">
          {{ district.value }} {{ district.unit }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'element-districts',
    },
    districts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

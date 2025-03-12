<template>
  <NuxtLoadingIndicator color="purple" height="2" />
  <div class="pa3">
    <div>
      <div>
        <header
          class="bg-black-90 fixed w-100 mw8 center left-0 right-0 menu pv3"
        >
          <nav class="flex justify-around f5 pa1 bg-dark-purple">
            <NuxtLink
              class="link underline-hover dark-pink"
              :to="localePath('/')"
              >{{ $t('menu_current') }}</NuxtLink
            >
            <NuxtLink
              class="link underline-hover dark-pink"
              :to="localePath('/forecast')"
              >{{ $t('menu_forecast') }}</NuxtLink
            >
            <NuxtLink
              class="link underline-hover dark-pink"
              :to="localePath('/district')"
              >{{ $t('menu_district') }}</NuxtLink
            >
            <NuxtLink
              v-for="availableLocale in availableLocales"
              :key="availableLocale.code"
              class="link underline-hover dark-pink"
              :to="switchLocalePath(availableLocale.code)"
              >{{ availableLocale.name }}</NuxtLink
            >
          </nav>
        </header>
        <NuxtPage class="pt4 w-100 mw8 center" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const title = computed(() => t('title'))

useHead({
  title: title,
})

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<style scoped>
.menu {
  top: 0;
}
</style>

<template>
  <div class="pa3">
    <div>
      <div>
        <header
          class="bg-black-90 fixed w-100 mw8 center left-0 right-0 menu pv3"
        >
          <nav class="flex justify-around f5 pa1 bg-dark-purple">
            <nuxt-link
              class="link underline-hover dark-pink"
              :to="localePath('/')"
              >{{ $t('menu_current') }}</nuxt-link
            >
            <nuxt-link
              class="link underline-hover dark-pink"
              :to="localePath('/forecast')"
              >{{ $t('menu_forecast') }}</nuxt-link
            >
            <nuxt-link
              class="link underline-hover dark-pink"
              :to="localePath('/district')"
              >{{ $t('menu_district') }}</nuxt-link
            >
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              class="link underline-hover dark-pink"
              :to="switchLocalePath(locale.code)"
              >{{ locale.name }}</nuxt-link
            >
          </nav>
        </header>

        <Nuxt class="pt4 w-100 mw8 center" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  top: 0;
}
</style>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].title,
    }
  },
}
</script>

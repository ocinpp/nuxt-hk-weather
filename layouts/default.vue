<template>
  <div class="pa3">
    <div>
      <div class="w-100 mw8 center">
        <header class="bg-black-90 fixed w-100 mw8 menu ph3 pv3">
          <nav class="flex w75 justify-around f5 pa1 bg-dark-purple">
            <nuxt-link class="link underline-hover dark-pink" to="/"
              >Current</nuxt-link
            >
            <nuxt-link class="link underline-hover dark-pink" to="/forecast"
              >Forecast</nuxt-link
            >
            <nuxt-link class="link underline-hover dark-pink" to="/district"
              >District</nuxt-link
            >
          </nav>
        </header>
        <Nuxt class="pt4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  top: 0;
}
</style>

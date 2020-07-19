<template>
  <div class="pa4">
    <div class="w-100 mw8 center">
      <h1 class="f4 white pv2 ph3">Hong Kong Weather Forecast</h1>
      <div class="pa3 bt bb b--dark-blue">
        <p class="f6 f5-ns lh-copy mv4 white">{{ generalSituation }}</p>
      </div>
      <div class="overflow-auto">
        <table class="f6 w-100" cellspacing="0">
          <tbody class="lh-copy white">
            <tr
              v-for="weatherForecast of weatherForecasts"
              :key="weatherForecast.forecastDate"
            >
              <td class="pa3 bb b--dark-blue">
                {{ weatherForecast.forecastDate | formatDate }}
              </td>
              <td class="pa3 bb b--dark-blue">{{ weatherForecast.week }}</td>
              <td class="pa3 bb b--dark-blue">
                {{ weatherForecast.forecastWeather }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object

    const res = await $axios.get(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en'
    )
    // const data = res.data
    return {
      generalSituation: res.data.generalSituation,
      weatherForecasts: res.data.weatherForecast,
    }
  },
  data() {
    return {
      hello: 'world',
    }
  },
}
</script>

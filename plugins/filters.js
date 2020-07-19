import Vue from 'vue'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

Vue.filter('capitalize', (val) => val.toUpperCase())

Vue.filter('formatDate', (val) =>
  format(parse(val, 'yyyyMMdd', new Date()), 'dd-MMM-yyyy (EEE)')
)

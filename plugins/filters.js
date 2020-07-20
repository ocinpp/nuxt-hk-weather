import Vue from 'vue'
import parse from 'date-fns/parse'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

Vue.filter('capitalize', (val) => val.toUpperCase())

Vue.filter('formatDate', (val) =>
  format(parse(val, 'yyyyMMdd', new Date()), 'dd-MMM-yyyy (EEE)')
)

Vue.filter('formatISODate', (val) =>
  format(parseISO(val), 'dd-MMM-yyyy (HH:mm)')
)

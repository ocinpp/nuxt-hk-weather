import Vue from 'vue'
import parse from 'date-fns/parse'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

Vue.filter('capitalize', (val) =>
  val !== null && val.length > 0 ? val.toUpperCase() : ''
)

Vue.filter('formatDate', (val) =>
  val !== null && val.length > 0
    ? format(parse(val, 'yyyyMMdd', new Date()), 'dd-MMM-yyyy (EEE)')
    : ''
)

Vue.filter('formatISODate', (val) =>
  val !== null && val.length > 0
    ? format(parseISO(val), 'dd-MMM-yyyy (HH:mm)')
    : ''
)

Vue.filter('prettyDescription', (val) =>
  val !== null && val.length > 0 ? val : 'N/A'
)

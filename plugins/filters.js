import Vue from 'vue'
import parse from 'date-fns/parse'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import { zhTW, enUS } from 'date-fns/locale'

Vue.filter('capitalize', (val) =>
  val !== null && val.length > 0 ? val.toUpperCase() : ''
)

Vue.filter('formatDate', (val, loc) =>
  val !== null && val.length > 0
    ? format(parse(val, 'yyyyMMdd', new Date()), 'dd-MM-yyyy (EEE)', {
        locale: loc === 'tc' ? zhTW : enUS,
      })
    : ''
)

Vue.filter('formatISODate', (val, loc) =>
  val !== null && val.length > 0
    ? format(parseISO(val), 'dd-MM-yyyy (HH:mm)', {
        locale: loc === 'tc' ? zhTW : enUS,
      })
    : ''
)

Vue.filter('prettyDescription', (val) =>
  val !== null && val.length > 0 ? val : 'N/A'
)

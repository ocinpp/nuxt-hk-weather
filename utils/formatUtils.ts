import { format, parse, parseISO } from 'date-fns'
import { zhTW, enUS } from 'date-fns/locale'

export function capitalize(val: string) {
  return val !== null && val.length > 0 ? val.toUpperCase() : ''
}

export function formatDate(val: string, loc: string) {
  return val !== null && val.length > 0
    ? format(parse(val, 'yyyyMMdd', new Date()), 'dd-MM-yyyy (EEE)', {
      locale: loc === 'tc' ? zhTW : enUS,
    })
    : ''
}

export function formatISODate(val: string, loc: string) {
  return val !== null && val.length > 0
    ? format(parseISO(val), 'dd-MM-yyyy (HH:mm)', {
      locale: loc === 'tc' ? zhTW : enUS,
    })
    : ''
}

export function prettyDescription(val: string) {
  return val !== null && val.length > 0 ? val : 'N/A'
}

export function formateDate(date: Date) {
  const now = new Date()
  const diffTime = now.getTime() - date.getTime()

  const seconds = Math.floor(diffTime / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })

  if (years > 0) {
    return rtf.format(-years, 'year')
  } else if (months > 0) {
    return rtf.format(-months, 'month')
  } else if (days > 0) {
    return rtf.format(-days, 'day')
  } else if (hours > 0) {
    return rtf.format(-hours, 'hour')
  } else if (minutes > 0) {
    return rtf.format(-minutes, 'minute')
  } else {
    return rtf.format(-seconds, 'second')
  }
}

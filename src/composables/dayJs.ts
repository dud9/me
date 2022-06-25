import dayJs from 'dayjs'
export { dayJs }

export function formatDate(d: string | Date) {
  const date = dayJs(d)
  if (date.year() === dayJs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}

export const getCurrentDate = () => {
  const today = new Date()
  const month = String(today.getMonth() + 1)
  const day = String(today.getDate())
  return `${day}/${month}`
}

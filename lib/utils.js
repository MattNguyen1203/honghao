import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export const convertStr2URL = (pickParams = {}) => {
  let str = ''
  Object.keys(pickParams).forEach((key) => {
    str += `${key}=${pickParams[key]}&`
  })
  str = str.slice(0, -1)
  return str
}

export function generateRandom4DigitNumber() {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000
  return randomNumber
}

export function parseQueryString(queryString) {
  const newString = queryString[0] === '"' ? queryString.slice(1) : queryString

  const keyValuePairs = newString.split('&')
  const obj = {}
  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split('=')
    obj[key] = decodeURIComponent(value)
  })
  return obj
}

export function formatCurrencyVND(number) {
  // Chuyển đổi số thành chuỗi và sử dụng toLocaleString để định dạng
  return number.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})
}

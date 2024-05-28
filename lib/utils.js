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

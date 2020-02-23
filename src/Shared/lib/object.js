// Utils
import { isArray, isDefined, isObject } from './is'

export function keys(items) {
  return isObject(items) ? Object.keys(items) : false
}

export function forEach(items, callback) {
  if (isDefined(items) && isDefined(items[0]) && isDefined(items[0].Field) || isArray(items)) {
    return items.forEach(callback)
  } else if (!isDefined(items)) {
    return false
  }

  return isObject(items) ? keys(items).forEach(callback) : false
}

export function exists(key, items) {
  if (!isArray(items) && !isObject(items)) {
    return false
  }

  if (isArray(items)) {
    return items.includes(key)
  }

  return keys(items).includes(key)
}

export function parseObject(obj) {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error parsing object...', obj)
  }
}

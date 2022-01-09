export const Checker = (type) => {
  let _storage
  try {
    _storage = window[type]
    const x = '__storage_test__'
    _storage.setItem(x, x)
    _storage.removeItem(x)
    return true
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22 ||
      e.code === 1014 ||
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      (_storage && _storage.length !== 0)
  }
}

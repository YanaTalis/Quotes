function localStorageSetItem(key, value) {
  if (typeof key !== 'string') {
    console.error('Key must be a string!')
    return
  }

  try {
    const jsonValue = JSON.stringify(value)
    localStorage.setItem(key, jsonValue)
  } catch (error) {
    console.error('Error setting item in localStorage', error)
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key)
}

function localStorageClear() {
  try {
    localStorage.clear()
  } catch (error) {
    console.error('Error clearing localStorage', error)
  }
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
}

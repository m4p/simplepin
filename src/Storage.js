import AsyncStorage from '@react-native-community/async-storage'

const keys = {
  apiToken: '@Simplepin:apiToken',
  markAsRead: '@Simplepin:markAsRead',
  exactDate: '@Simplepin:exactDate',
  sortTags: '@Simplepin:sortTags',
  privateByDefault: '@Simplepin:privateByDefault',
  unreadByDefault: '@Simplepin:unreadByDefault',
  openLinksExternal: '@Simplepin:openLinksExternal',
  readerMode: '@Simplepin:readerMode',
}

const apiToken = async () => AsyncStorage.getItem(keys.apiToken)

const setApiToken = async value => {
  await AsyncStorage.setItem(keys.apiToken, value)
}

const markAsRead = async () => {
  const value = await AsyncStorage.getItem(keys.markAsRead)
  return !!value
}

const setMarkAsRead = async value => {
  const strValue = JSON.stringify(value)
  await AsyncStorage.setItem(keys.markAsRead, strValue)
}

const exactDate = async () => {
  const value = await AsyncStorage.getItem(keys.exactDate)
  return !!value
}

const setExactDate = async value => {
  const strValue = JSON.stringify(value)
  await AsyncStorage.setItem(keys.exactDate, strValue)
}

const sortTags = async () => {
  const value = await AsyncStorage.getItem(keys.sortTags)
  return !!value
}

const setSortTags = async value => {
  const strValue = JSON.stringify(value)
  await AsyncStorage.setItem(keys.sortTags, strValue)
}

const privateByDefault = async () => {
  const value = await AsyncStorage.getItem(keys.privateByDefault)
  return !!value
}

const setPrivateByDefault = async value => {
  const strValue = JSON.stringify(value)
  await AsyncStorage.setItem(keys.privateByDefault, strValue)
}

const unreadByDefault = async () => {
  const value = await AsyncStorage.getItem(keys.unreadByDefault)
  return !!value
}

const setUnreadByDefault = async value => {
  const strValue = JSON.stringify(value)
  await AsyncStorage.setItem(keys.unreadByDefault, strValue)
}

const openLinksExternal = async () => {
  const value = await AsyncStorage.getItem(keys.openLinksExternal)
  return !!value
}

const setOpenLinksExternal = async value => {
  const strValue = JSON.stringify(value)
  await AsyncStorage.setItem(keys.openLinksExternal, strValue)
}

const readerMode = async () => {
  const value = await AsyncStorage.getItem(keys.readerMode)
  return value !== false
}

const setReaderMode = async value => {
  const strValue = JSON.stringify(value)
  await AsyncStorage.setItem(keys.readerMode, strValue)
}

const userPreferences = async () => {
  return {
    apiToken: await apiToken(),
    exactDate: await exactDate(),
    markAsRead: await markAsRead(),
    sortTags: await sortTags(),
    privateByDefault: await privateByDefault(),
    unreadByDefault: await unreadByDefault(),
    openLinksExternal: await openLinksExternal(),
    readerMode: await readerMode(),
  }
}

const clear = async () => AsyncStorage.clear()

export default {
  apiToken,
  setApiToken,
  markAsRead,
  setMarkAsRead,
  exactDate,
  setExactDate,
  sortTags,
  setSortTags,
  privateByDefault,
  setPrivateByDefault,
  unreadByDefault,
  setUnreadByDefault,
  openLinksExternal,
  setOpenLinksExternal,
  readerMode,
  setReaderMode,
  userPreferences,
  clear,
}

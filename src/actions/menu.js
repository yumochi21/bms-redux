import * as types from '../constants/ActionTypes'

export const selectMenu = (groupId, serialNo) => ({
  type: types.SELECT_MENU,
  groupId,
  serialNo
})

export const selectMenuHeader = (groupId) => ({
  type: types.SELECT_MENU_HEADER,
  groupId
})

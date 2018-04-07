import * as types from '../constants/ActionTypes'

export const changePage = (groupId, serialNo) => ({
  type: types.CHANGE_PAGE,
  groupId,
  serialNo
})

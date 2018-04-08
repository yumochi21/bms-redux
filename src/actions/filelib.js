import * as types from '../constants/ActionTypes'

export const openFoler = (fileList) => ({
  type: types.OPEN_FOLER,
  fileList
})

export const selectFile = (fileId) => ({
  type: types.SELECT_FILE,
  fileId
})

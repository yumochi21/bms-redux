import { combineReducers } from 'redux'
import menus from './menu/menus'
import pager from './pager/pager'
import filelib from './filelib/filelib'

const reducer = combineReducers({
  menus,
  pager,
  filelib
})

export default reducer

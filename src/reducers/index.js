import { combineReducers } from 'redux'
import menus from './menu/menus'
import pager from './pager/pager'

const reducer = combineReducers({
  menus,
  pager
})

export default reducer

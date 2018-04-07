import { bindActionCreators } from 'redux'
import * as types from '../constants/ActionTypes'
import * as menu from './menu'
import * as pager from './pager'


export default dispatch => ({

  menu: bindActionCreators(menu, dispatch),
  pager: bindActionCreators(pager, dispatch)

})

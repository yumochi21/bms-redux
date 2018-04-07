import { bindActionCreators } from 'redux'
import * as types from '../constants/ActionTypes'
import * as menu from './menu'


export default dispatch => ({

  menu: bindActionCreators(menu, dispatch),

})

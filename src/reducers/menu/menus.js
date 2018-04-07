import * as types from '../../constants/ActionTypes'

const initialState = [
  {
    groupId: 'ptl',
    headerLabel: 'ポータル',
    subMenus: [
      {
        serialNo: 1,
        label: 'マイページ',
        selected: true
      },
      {
        serialNo: 2,
        label: 'ファイルライブラリ',
        selected: false
      }
    ],
    selected: true
  }
]

const menus = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_MENU: {
      const { groupId, serialNo } = action
      return selectMenu(state, groupId, serialNo)
    }
    case types.SELECT_MENU_HEADER: {
      const { groupId } = action
      return selectMenuHeader(state, groupId)
    }
    default: {
      return state
    }
  }
}

const selectMenu = (menuList, groupId, serialNo) => {
  return Object.assign([], menuList.map(
    menuGroup => {
      return {
        groupId: menuGroup.groupId,
        headerLabel: menuGroup.headerLabel,
        subMenus: menuGroup.subMenus.map(
          menu => {
            return {
              serialNo: menu.serialNo,
              label: menu.label,
              selected: (menuGroup.groupId == groupId && menu.serialNo == serialNo) ? true : false
            }
          }
        ),
        selected: menuGroup.selected
      }
    }
  ))
}

const selectMenuHeader = (menuList, groupId) => {
  return Object.assign([], menuList.map(
    menuGroup => {
      return {
        groupId: menuGroup.groupId,
        headerLabel: menuGroup.headerLabel,
        subMenus: menuGroup.subMenus,
        selected: (menuGroup.groupId == groupId) ? !menuGroup.selected : menuGroup.selected
      }
    }
  ))
}

export default menus

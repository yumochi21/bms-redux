import React, { Component } from 'react'

import * as types from '../../constants/ActionTypes'

import EmptyPage from '../../containers/common/EmptyPage.js'
import MyPage from '../../components/mypage/MyPage.js'
import FileLib from '../../components/library/FileLibrary.js'

const initialState = {
  page: <EmptyPage />
}

const PageStore = {
  ptl: {
    1: <MyPage />,
    2: <FileLib />
  }
}

const pager = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PAGE: {
      const { groupId, serialNo } = action
      return changePage(state, groupId, serialNo)
    }
    default: {
      return state
    }
  }
}

const changePage = (state, groupId, serialNo) => {
  return {
    page: PageStore[groupId][serialNo]
  }
}

export default pager

import React, { Component } from 'react';

import Diff from '../tool/Diff.js';
import EmptyPage from '../common/EmptyPage.js';

import MyPage from '../mypage/MyPage.js';
import FileLib from '../library/FileLibrary.js';

const PageStore = {
  ptl: {
    1: <MyPage />,
    2: <FileLib />
  },
  sfa: {
    1: <EmptyPage />,
    2: <EmptyPage />,
    3: <EmptyPage />
  },
  crm: {
    1: <EmptyPage />,
    2: <EmptyPage />
  },
  emp: {
    1: <EmptyPage />,
    2: <EmptyPage />
  },
  skl: {
    1: <EmptyPage />,
    2: <Diff />
  }
}

const Pager = {

  getPage: (groupId, serialNo) => {
    return PageStore[groupId][serialNo];
  }

}

export default Pager;

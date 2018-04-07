import React, { Component } from 'react';
import Diff from '../tool/Diff.js'

const MenuStore = {};

MenuStore.menuList = [
  {
    groupId: 'ptl',
    headerLabel: 'ポータル',
    subMenus: [
      {
        serialNo: 1,
        label: 'マイページ',
        selected: false
      },
      {
        serialNo: 2,
        label: 'ファイルライブラリ',
        selected: false
      }
    ],
    selected: true
  },
  {
    groupId: 'sfa',
    headerLabel: '営業管理',
    subMenus: [
      {
        serialNo: 1,
        label: '案件管理',
        selected: false
      },
      {
        serialNo: 2,
        label: '案件分析',
        selected: false
      },
      {
        serialNo: 3,
        label: '営業日報',
        selected: false
      }
    ],
    selected: true
  },
  {
    groupId: 'crm',
    headerLabel: '顧客管理',
    subMenus: [
      {
        serialNo: 1,
        label: '顧客検索',
        selected: false
      },
      {
        serialNo: 2,
        label: '顧客登録',
        selected: false
      }
    ],
    selected: true
  },
  {
    groupId: 'emp',
    headerLabel: '人材管理',
    subMenus: [
      {
        serialNo: 1,
        label: '社員検索',
        selected: false
      },
      {
        serialNo: 2,
        label: '社員登録',
        selected: false
      }
    ],
    selected: true
  },
  {
    groupId: 'skl',
    headerLabel: 'スキル管理',
    subMenus: [
      {
        serialNo: 1,
        label: '技術検索',
        selected: false
      },
      {
        serialNo: 2,
        label: '技術登録',
        selected: false
      }
    ],
    selected: true
  }
]

export default MenuStore;

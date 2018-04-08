import * as types from '../../constants/ActionTypes'

const initialState = {
  fileTree: {
    id: '1',
    name: 'フォルダ１',
    subFolder: [
      {id: '1', name: 'フォルダ２'},
      {
        id: '1',
        name: 'フォルダ名',
        subFolder: [
          {id: '1', name: 'フォルダ名'}
        ]
      },
      {id: '1', name: 'フォルダ名'},
      {id: '1', name: 'フォルダ名'}
    ]
  },
  fileList: [
    {fileId: 'file1', fileName: 'ファイル１', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: false, selected: false},
    {fileId: 'file2', fileName: 'ファイル２', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: false, selected: false},
    {fileId: 'file3', fileName: 'ファイル３', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: false, selected: false},
    {fileId: 'file4', fileName: 'ファイル４', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: true, selected: false},
    {fileId: 'file5', fileName: 'ファイル５', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: true, selected: false},
    {fileId: 'file6', fileName: 'ファイル６', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: true, selected: false},
    {fileId: 'file7', fileName: 'ファイル７', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: true, selected: false},
    {fileId: 'file8', fileName: 'ファイル８', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: true, selected: false},
    {fileId: 'file9', fileName: 'ファイル９', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: true, selected: false}
  ]
}

const filelib = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_FOLER: {
      const { fileTree } = state
      const { fileList } = action
      return openFolder(fileTree, fileList)
    }
    case types.SELECT_FILE: {
      const { fileTree, fileList } = state
      const { fileId } = action
      return selectFile(fileTree, fileList, fileId)
    }
    default:
      return state
  }
}

const openFolder = (fileTree, fileList) => {
  return {
    fileTree: fileTree,
    fileList: fileList
  }
}

const selectFile = (fileTree, fileList, fileId) => {
  return {
    fileTree: fileTree,
    fileList: fileList.map(
      file => {
        const selected = (file.fileId == fileId) ? true : false
        return {
          fileId: file.fileId,
          fileName: file.fileName,
          updateDate: file.updateDate,
          updateUser: file.updateUser,
          fileSize: file.fileSize,
          isFile: file.isFile,
          selected: selected
        }
      }
    )
  }
}

export default filelib

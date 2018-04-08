import React, { Component } from 'react';

import FlatButton from '../../containers/form/Button.js';

import './FileLibrary.css';

class FileLib extends Component {

  render() {
    const {filelib: filelib, actions: actions} = this.props
    console.log(actions)
    return (
      <div className="File-lib">
        <FileLibNavi />
        <FileLibTree folderTreeObj={filelib.fileTree} actions={actions} />
        <FileLibList fileList={filelib.fileList} actions={actions} />
      </div>
    )
  }
}

class FileLibNavi extends Component {

  constructor(props) {
    super();
    this.state = {
      displaySearchForm: false,
      searchTextStyle: {
        width: '0px'
      },
      searchText: ''
    }
    this.showSearchForm = this.showSearchForm.bind(this);
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
  }

  onChangeSearchText(event) {
    this.setState({
      searchText: event.target.result
    })
  }

  showSearchForm() {
    this.setState({
      displaySearchForm: !this.state.displaySearchForm,
      searchTextStyle: {
        width: (!this.state.displaySearchForm ? '150px' : '0px'),
        padding: (!this.state.displaySearchForm ? '5px 5px 5px 5px' : '5px 0px 5px 0px')
      }
    });
  }

  render() {
    return (
      <div className="File-lib-navi">
        <div className="File-lib-navi-icon">
          <img src="/img/File-Lib-Back.png" />
        </div>
        <div className="File-lib-navi-icon">
          <img src="/img/File-Lib-Next.png" />
        </div>
        <div className="File-lib-navi-icon">
          <img src="/img/File-Lib-Upward.png" />
        </div>
        <div className="File-lib-navi-search">
          <img src="/img/File-Lib-Search.png" onClick={this.showSearchForm} />
          <input type="text" value={this.state.searchText} style={this.state.searchTextStyle} onChange={this.onChangeSearchText} className="File-lib-navi-search-text" />
        </div>
      </div>
    )
  }
}

class FileLibTree extends Component {

  render() {
    return (
      <div className="File-lib-tree">
        <FileLibTreeFolder
          id={this.props.folderTreeObj.id}
          name={this.props.folderTreeObj.name}
          subFolder={this.props.folderTreeObj.subFolder}
          actions={this.props.actions} />
      </div>
    )
  }
}

class FileLibTreeFolder extends Component {

  constructor(props) {
    super();
    this.state = {
      displaySubFolder: false,
      style: {
        display: 'none'
      }
    };
    this.moveToFolder = this.moveToFolder.bind(this);
    this.showSubFolder = this.showSubFolder.bind(this);
  }

  showSubFolder(event) {
    var displayStyle = this.state.displaySubFolder ? 'none' : 'block';
    this.setState({
      displaySubFolder: !this.state.displaySubFolder,
      style: {
        display: displayStyle
      }
    })
  }

  moveToFolder(event) {
    //this.props.moveToFolder(this.props.id, this.props.name);
    this.setState({
      displaySubFolder: true,
      style: {
        display: 'block'
      }
    })

    // TODO APIで取得
    const fileList = [
      {fileId: 'file1', fileName: 'ファイル１', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: false, selected: false},
      {fileId: 'file8', fileName: 'ファイル９', updateDate: '2017/01/21 11:11:11', updateUser: '望月由登', fileSize: '124MB', isFile: true, selected: false}
    ]
    this.props.actions.filelib.openFoler(fileList)
  }

  showFolderMenu(event) {
    alert('メニュー表示');

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="File-lib-tree-folder" onClick={this.showSubFolder} onDoubleClick={this.moveToFolder}  onContextMenu={this.showFolderMenu}>
          {
            (this.props.subFolder != null) ?
              (this.state.displaySubFolder ?
                <span className="File-lib-tree-open">－</span>
                :
                <span className="File-lib-tree-open">＋</span>
              )
              :
              <span className="File-lib-tree-open">　</span>
          }
          <img src="/img/File-Lib-Folder.png" />
          {this.props.name}
        </div>
        {
          this.props.subFolder ?
            <div className="File-lib-tree-folder-child" style={this.state.style}>
              {
                this.props.subFolder.map(
                  subFolder => {
                    return <FileLibTreeFolder id={subFolder.id} name={subFolder.name} subFolder={subFolder.subFolder} actions={this.props.actions} />
                  }
                )
              }
            </div>
            :
            null
        }
      </div>
    )
  }
}

class FileLibList extends Component {
  /*
  props
   - {Object[]} fileList
  */
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="File-lib-list">
        <table className="File-lib-list-table">
          <thead>
            <tr>
              <th className="File-lib-list-kind">d/f</th>
              <th className="File-lib-list-name">ファイル名</th>
              <th className="File-lib-list-status">更新日</th>
              <th className="File-lib-list-status">更新者</th>
              <th className="File-lib-list-status">サイズ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="5">
                <img src="/img/File-Lib-Upward-Gray.png" className="File-lib-list-icon" />　
                <span style={{fontWeight: '700', color: '#666666'}}>親フォルダに戻る</span>
              </td>
            </tr>
            {
              this.props.fileList.map(
                file => {
                  return <FileLibListRow fileObj={file} actions={this.props.actions} />
                }
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

class FileLibListRow extends Component {
  /*
  props
   - {Object} fileObj
  */

  constructor(props) {
    super();
    this.state = {
      fileId: props.fileObj.fileId
    }
    this.downloadFile = this.downloadFile.bind(this);
    this.showFileMenu = this.showFileMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  downloadFile(event) {
    alert(this.state.fileId);
  }

  showFileMenu(event) {
    alert('メニュー表示');

    event.preventDefault();
  }

  handleClick(event) {
    this.props.actions.filelib.selectFile(this.props.fileObj.fileId)
  }

  render() {
    return (
      <tr onClick={this.handleClick} onDoubleClick={this.downloadFile} onContextMenu={this.showFileMenu} className={this.props.fileObj.selected ? 'File-lib-list-selected' : null}>
        <td className="File-lib-list-kind">
          {
            this.props.fileObj.isFile ?
              <img src="/img/File-Lib-File.png" className="File-lib-list-icon" />
              :
              <img src="/img/File-Lib-Folder.png" className="File-lib-list-icon" />
          }
        </td>
        <td className="File-lib-list-name">{this.props.fileObj.fileName}</td>
        <td className="File-lib-list-status" style={{width: '150px'}}>{this.props.fileObj.updateDate}</td>
        <td className="File-lib-list-status">{this.props.fileObj.updateUser}</td>
        <td className="File-lib-list-status">{this.props.fileObj.fileSize}</td>
      </tr>
    )
  }
}

export default FileLib;

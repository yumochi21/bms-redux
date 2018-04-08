import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'
import Menu from './menu/Menu'
import Header from './header/Header'
import Content from './common/Content'
import { PAGE_ID } from '../reducers/pager/pager'
import './common/Common.css'

import EmptyPage from '../containers/common/EmptyPage.js'
import MyPage from '../components/mypage/MyPage.js'
import FileLib from '../components/library/FileLibrary.js'

class App extends Component {

  static propTypes = {
    menus: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     menuList: MenuStore.menuList,
  //     page: null
  //   };
  //   this.movePage=this.movePage.bind(this);
  // }
  //
  // movePage = (groupId, serialNo) => {
  //
  //   var page = Pager.getPage(groupId, serialNo);
  //   this.setState({
  //     page: page
  //   });
  // }

  movePage = () => {
    console.log('move page');
  }

  render() {
    let page = <EmptyPage />
    console.log(this.props.pager.page + '/' + PAGE_ID.FILE_LIB)
    switch (this.props.pager.page) {
      case PAGE_ID.EMPTY_PAGE:
        page = <EmptyPage />
        break
      case PAGE_ID.FILE_LIB:
        page = <FileLib filelib={this.props.filelib} actions={this.props.actions} />
        break
      default:
        page = <EmptyPage />
        break
    }
    return (
      <div>
        <Header />
        <Menu menus={this.props.menus} actions={this.props.actions} title="Menu" />
        <Content>
          { page }
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menus: state.menus,
    pager: state.pager,
    filelib: state.filelib
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: actions(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

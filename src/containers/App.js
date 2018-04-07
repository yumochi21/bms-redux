import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'
import Menu from './menu/Menu'
import Header from './header/Header'
import Content from './common/Content'
import './common/Common.css'

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
    return (
      <div>
        <Header />
        <Menu menus={this.props.menus} actions={this.props.actions} title="Menu" />
        <Content>
          {this.props.pager.page}
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menus: state.menus,
    pager: state.pager
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

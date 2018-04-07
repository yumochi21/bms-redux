import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './Menu.css';

class MenuGroup extends Component {

  static propTypes = {
    menuObj: PropTypes.object.isRequired,
    selectMenuHeader: PropTypes.func.isRequired,
    selectMenu: PropTypes.func.isRequired
  }

  render() {
    const subMenuList = this.props.menuObj.subMenus.map(
      (subMenu, index) => {
        return <SubMenu groupId={this.props.menuObj.groupId}
                     menuObj={subMenu}
                     key={index}
                     selectMenu={this.props.selectMenu}
               />
      }
    )
    return (
      <div key={this.props.menuObj.groupId}>
        <MenuHeader groupId={this.props.menuObj.groupId}
                    label={this.props.menuObj.headerLabel}
                    selected={this.props.menuObj.selected}
                    selectMenuGroup={this.props.selectMenuHeader}
        />
        {(this.props.menuObj.selected) ? <div>{subMenuList}</div> : null}
      </div>
    );
  }
}

class MenuHeader extends Component {

  static propTypes = {
    groupId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    selectMenuGroup: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.selectMenuGroup(this.props.groupId)
  }

  render() {
    return (
      <div
        className="Menu-element Menu-header"
        id={'Menu-header-' + this.props.groupId}
        onClick={this.handleClick}
      >
        {this.props.label}
        <a
          href="javascript:void(0)"
          className="Menu-header-accordion"
        >
          {this.props.selected ? '－' : '＋'}
        </a>
      </div>
    )
  }
}

class SubMenu extends Component {

  static propTypes = {
    groupId: PropTypes.string.isRequired,
    menuObj: PropTypes.object.isRequired,
    selectMenu: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.selectMenu(this.props.groupId, this.props.menuObj.serialNo)
  }

  render() {
    return (
      <a
        className={'Menu-element Sub-menu' + (this.props.menuObj.selected ? ' Menu-element-selected' : '')}
        onClick={this.handleClick}
      >
        {this.props.menuObj.label}
      </a>
    );
  }
}

class Menu extends Component {

  static propTypes = {
    menus: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  render(props) {
    const { menus: menus, actions: {menu : actions}} = this.props
    return (
      <div className="Menu">
        <div className="Menu-title">{this.props.title}</div>
        {
          this.props.menus.map(
            menu => <MenuGroup
                      menuObj={menu}
                      key={menu.groupId}
                      selectMenu={actions.selectMenu}
                      selectMenuHeader={actions.selectMenuHeader} />
          )
        }
      </div>
    )
  }
}

export default Menu

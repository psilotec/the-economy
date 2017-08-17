import React, { Component } from 'react';
import { Menu } from 'antd';

class Header extends Component {
  state = {
    current: 'economy',
  };

  handleClick = event => {
    this.setState({
      current: event.key,
    });
  };

  render() {
    return (
      <div className="header">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="economy">The Economy</Menu.Item>

          <Menu.Item key="settings">Settings</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;

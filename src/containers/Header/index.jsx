import React, { PureComponent } from 'react';
import Menu from 'components/Menu';
import Divider from 'components/Divider';
import Top from './components/Top';
import Title from './components/Title';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <header>
        <Top />
        <Title toggleMenu={this.toggleMenu} />
        <Divider />
        <Menu
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
        />
      </header>
    );
  }
}

export default Header;

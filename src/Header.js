import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav>
          <Link to="/" >Pokedex</Link>
          <Link to="/about" >About</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
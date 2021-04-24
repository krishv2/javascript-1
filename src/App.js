import './App.css';
import {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Menu from './components/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        <Menu/>
        </Navbar>
      </div>
    );
  }
}

export default App;

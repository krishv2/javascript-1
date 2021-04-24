import './App.css';
import {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

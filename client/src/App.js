import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import { loadUser } from './actions/authActions';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store = {store}>
        <div className="App">
          <AppNavbar/>
          <ShoppingList/>
        </div>
      </Provider>
      
    );
  }
  
}

export default App;

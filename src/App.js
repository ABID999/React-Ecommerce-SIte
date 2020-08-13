import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/pages/Homepage.component';
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component';



function App() {
  return (
    <div >
      {/* <Homepage /> */}
      {/* Only render the first matched path */}
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

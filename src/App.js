import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/pages/Homepage.component';
import ShopPage from './components/pages/shop/shop.component'

const HatsPage = () =>(
  <h1>This is the Hats page</h1>
)

function App() {
  return (
    <div >
      {/* <Homepage /> */}
      {/* Only render the first matched path */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

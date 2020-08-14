import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/pages/Homepage.component';
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component';
import authenticationPage from './components/pages/auth/authentication-page.component';

import {auth} from './firebase/firebase.utils';



class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null ;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(this.state);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
      <div >
        {/* <Homepage /> */}
        {/* Only render the first matched path */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={authenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

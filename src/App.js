import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from './components/pages/Homepage.component';
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component';
import AuthenticationPage from './components/pages/auth/authentication-page.component'

import './App.css';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import CheckoutPage from './components/checkout/checkout.page';


class App extends React.Component{
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null ;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot( snapShot =>{
          //this.setState
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
        
      }
      // this.setState({currentUser: userAuth}); 
      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
      <div >
        {/* <Homepage /> */}
        {/* Only render the first matched path */}
        {/* <Header currentUser={this.state.currentUser}/> */}
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/auth" render={ () => this.props.currentUser ? (<Redirect to="/" />): <AuthenticationPage />}/>
          <Route exact path="/checkout" component={CheckoutPage} />
          {/* <Route exact path="/auth" component={authenticationPage} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);

import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage.component'
import {Route, Switch} from 'react-router-dom';

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
      </Switch>
    </div>
  );
}

export default App;

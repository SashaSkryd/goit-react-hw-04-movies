import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


import routes from '../services/routes';
import Loader from '../components/Loader/Loader';
import AppBar from '../components/AppBar/AppBar';

class App extends Component {

  render(){
    
      return (
        <AppBar>
        <Suspense fallback={<Loader/>}>
          <Switch>
            {routes.map(route => <Route key={route.path} {...route} />)}
          </Switch>
              </Suspense>
        </AppBar>
    );
  }
  
}
export default App;




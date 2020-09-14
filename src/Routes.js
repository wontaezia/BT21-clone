import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ItemDetail from './pages/ItemDetail/ItemDetail';
import ItemList from './pages/ItemList/ItemList';
import Main from './pages/Main/Main';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/ItemDetail" component={ItemDetail} />
          <Route exact path="/ItemList" component={ItemList} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;

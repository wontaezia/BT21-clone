import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ItemList from './Pages/ItemList/ItemList';
import Main from './Pages/Main/Main';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/ItemDetail" component={ItemDetail} />
          <Route exact path="/ItemDetail/:productId" component={ItemDetail} />
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

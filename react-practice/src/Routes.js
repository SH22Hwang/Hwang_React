import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import main from "./pages/main/main";
import hotdeal_info from "./pages/hotdeal_info/hotdeal_info";
import search from "pages/search/search";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={main} />
          <Route exact path="/hotdeal_info" component={hotdeal_info} />
          <Route exact path="/search" component={search} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

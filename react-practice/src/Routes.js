import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import HotDealInfo from "./pages/HotDealInfo/HotDealInfo";
import Search from "./pages/Search/Search";

class Routes extends React.Component {
  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={Main} />
      //     <Route exact path="/hotdeal" component={HotDealInfo} />
      //     <Route exact path="/search" component={Search} />
      //   </Switch>
      // </Router>
      <div className="main">
        <Main />
      </div>
    );
  }
}

export default Routes;

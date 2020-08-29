import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/NavScroll/Nav";
import Map from "./pages/Map";
import Blog from "./pages/Blog";
import Graphs from "./pages/Graphs";
import Clusters from "./pages/Clusters";
import Users from "./pages/Users";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Map} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/graphs" exact component={Graphs} />
            <Route path="/clusters" exact component={Clusters} />
            <Route path="/users" exact component={Users} />
            <Route
              path="/users/new"
              exact
              component={CreateAccount}
              id="create_account"
            />
          </Switch>
          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;

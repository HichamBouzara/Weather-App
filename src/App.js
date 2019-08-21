import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Settings from "./components/layout/Settings";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <SideBar />
                <Switch>
                  <Route exact path="/" name="Main Page" component={Landing} />
                  <Route
                    exact
                    path="/settings"
                    name="Settings"
                    component={Settings}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;

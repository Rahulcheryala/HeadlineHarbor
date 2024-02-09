import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { Navbar, NewsComponent } from "./components/components";
import { Home } from "./sections/sections";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              exact
              path="/home"
              element={
                <NewsComponent key="general" country="in" category="general" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsComponent key="health" country="in" category="health" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent key="science" country="in" category="science" />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent key="sports" country="in" category="sports" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import {
  InfiniteNewsComponent,
  InfinitePractice,
  Navbar,
  NewsComponent,
} from "./components/components";

export class App extends Component {
  apiKey = import.meta.env.VITE_NEWS_API_KEY_1;
  // apiKey = import.meta.env.VITE_NEWS_API_KEY_2;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              exact
              path="/home"
              element={
                <NewsComponent
                  APIkey={this.apiKey}
                  setProgress={this.setProgress}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  APIkey={this.apiKey}
                  setProgress={this.setProgress}
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
                  APIkey={this.apiKey}
                  setProgress={this.setProgress}
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
                <NewsComponent
                  APIkey={this.apiKey}
                  setProgress={this.setProgress}
                  key="health"
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent
                  APIkey={this.apiKey}
                  setProgress={this.setProgress}
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent
                  APIkey={this.apiKey}
                  setProgress={this.setProgress}
                  key="sports"
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  APIkey={this.apiKey}
                  setProgress={this.setProgress}
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>

        {/* <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              exact
              path="/home"
              element={
                <InfiniteNewsComponent 
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <InfiniteNewsComponent 
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
                <InfiniteNewsComponent 
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
                <InfiniteNewsComponent 
                  key="health"
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <InfiniteNewsComponent 
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <InfiniteNewsComponent 
                  key="sports"
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <InfiniteNewsComponent 
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router> */}

        {/* <InfiniteNewsComponent  /> */}
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Navbar, NewsComponent, NewsItem } from "./components/components";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <NewsComponent />
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { Navbar, NewsComponent } from "./components/components";
import { Home, About, Contact } from "./sections/sections";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <NewsComponent />

          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;

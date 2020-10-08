import React from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <div className="container" style={{ paddingTop: 200 }}>
          <div className="content-card">
            <Route path="/" exact component={PostList} />
            <Route path="/post/:id" exact component={PostDetails} />
            <Route path="/profile/:id" exact component={Profile} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;

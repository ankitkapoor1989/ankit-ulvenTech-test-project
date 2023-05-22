import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./component/UserList/UserList";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<UserList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

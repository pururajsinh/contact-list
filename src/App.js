import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AddUser from "./components/AddUser";
import Contact from "./components/EditContact";
import ContactList from "./components/ContactList";
import "../src/styles/app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/AddUser" exact component={AddUser} />
          <Route path="/Contact/:id">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

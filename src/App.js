import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/EditContact";
import ContactList from "./components/ContactList";
function App() {
  return (
    <Router>
      <div className="App">
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

import React, { useState, useEffect } from "react";
import { Home, Edit, Add } from "../pages";
import { Route, Switch } from "react-router-dom";
import { SetItem, GetItem } from "../storage";

export const Routes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = GetItem("notes", []);
    setNotes(data);
  }, []);

  useEffect(() => {
    console.log("fired");
    SetItem("notes", notes);
  }, [notes]);

  return (
    <Switch>
      <Route exact path='/'>
        <Home notes={notes} setNotes={setNotes} />
      </Route>
      <Route path='/edit/:id'>
        <Edit notes={notes} setNotes={setNotes} />
      </Route>
      <Route exact path='/add'>
        <Add setNotes={setNotes} />
      </Route>
      <Route>404 Page Not Found!</Route>
    </Switch>
  );
};

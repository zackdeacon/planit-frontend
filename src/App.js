import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home"
import User from "./pages/User/User"
import Cartographer from './pages/Cartographer/Cartographer';
import MapDashboard from './pages/MapDashboard/MapDashboard';
import Suggestions from "./pages/Suggestion/Suggestion";
import FinalRender from "./pages/FinalRender/FinalRender";
import Chat from "./components/Chat/chat";
import NoMatch from "./pages/NoMatch/NoMatch";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/createmap">
            <Cartographer />
          </Route>
          <Route exact path="/dashboard/:id">
            <MapDashboard />
          </Route>
          <Route exact path="/addsuggestion/:id">
            <Suggestions />
          </Route>
          <Route exact path="/itinerary/:id">
            <FinalRender />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

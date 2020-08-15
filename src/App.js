import React from 'react';
import Home from "./pages/Home/Home"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Maps from './pages/Map/Map';
import Suggestions from "./pages/Suggestion/Suggestion"

function App() {
  return (
    <>
      {/* <Home /> */}
      <Maps/>
      <Suggestions/>
    </>
  );
}

export default App;

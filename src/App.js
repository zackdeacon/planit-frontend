import React from 'react';
import Home from "./pages/Home/Home"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Maps from './components/MapForm/mapform';
import Suggestions from "./components/suggestionForm/suggestionForm"

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

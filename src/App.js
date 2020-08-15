import React from 'react';
import Home from "./pages/Home/Home"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MapForm from './components/MapForm/mapform';

function App() {
  return (
    <>
      <Home />
      <MapForm/>
    </>
  );
}

export default App;

import React from 'react';
import Home from "./pages/Home/Home"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Mapcard from './components/MapCard/mapcard';
import MapForm from './components/MapForm/mapform';
import Maps from './pages/Map/Map';
import Suggestions from "./pages/Suggestion/Suggestion"
import Chat from "./components/Chat/chat"

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Maps/>
      <Suggestions/> */}
      <Chat />
    </>
  );
}

export default App;

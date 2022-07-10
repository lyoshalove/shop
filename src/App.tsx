import React from 'react';
import './assets/styles/global.sass';
import Notifications from './components/Notifications/Notifications';
import TheFooter from './components/TheFooter/TheFooter';
import TheHeader from "./components/TheHeader/TheHeader";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <TheHeader></TheHeader>
      <Router></Router>
      <TheFooter></TheFooter>
      <Notifications></Notifications>
    </div>
  );
}

export default App;

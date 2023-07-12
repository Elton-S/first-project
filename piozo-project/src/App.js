import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ButtonAppBar from './components/navbar/navbar';
import Auth from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

const App = () => {
  return (
    <Router>
       <ButtonAppBar></ButtonAppBar>
  <Routes>
    <Route path="/login" element={
      <Auth/>
    }>
    </Route>
    <Route path='/dashboard' element={
      <Dashboard/>
    }></Route>
  </Routes>

  </Router>


  );
};

export default App;

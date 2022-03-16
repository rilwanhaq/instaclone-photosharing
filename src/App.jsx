import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Home from "./components/home"
import Feeds from "./components/feeds"
import AddData from './components/addData';

const App=() => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/feeds' element={<Feeds></Feeds>}></Route>
        <Route exact path='/add' element={<AddData></AddData>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

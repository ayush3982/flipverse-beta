import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import City from './pages/City';
import Room from './pages/Room';

const App = () => {

  return (
   <>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/menu" element={<Menu/>} />
        <Route path = "/city" element={<City/>} />
        <Route path = "/room" element={<Room/>} />
      </Routes>
   </>
  );
};

export default App;
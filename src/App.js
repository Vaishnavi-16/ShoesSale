import * as React from 'react'
// import Navbar from 'components/Navbar.jsx'
// 1. import `ChakraProvider` component
import ReactDOM from 'react-dom/client';


import { Button } from "@nextui-org/react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import Collection from './pages/Collection';
import Shoes from './pages/Shoes';
import RacingBoots from './pages/RacingBoots';
import Contact from './pages/Contact';


export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <><React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='shoes' element={<Shoes />} />
          <Route path='racingboots' element={<RacingBoots />} />
          <Route path='contact' element={<Contact />} />
          <Route path='collection' element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode><Button.Group>
        
      </Button.Group></>
  )
}
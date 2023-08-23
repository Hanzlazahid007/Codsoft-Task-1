import React from 'react'
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import "@fontsource/poppins"

import {Scrollbar} from 'smooth-scrollbar-react';

import Home from './Home';
import About from './About';
import Project from './Project';

import Service from './Service';

import Navbar from "./Navbar";
const App = () => {
  return (
    <>
       <Scrollbar
            damping={0.1}
    thumbMinSize={20}
  renderByPixels={true}
  alwaysShowTracks={false}
  continuousScrolling={true}
  
     plugins={{
          overscroll: {
            effect: 'bounce',
          },
        }}>
      <Navbar />
            </Scrollbar>

    </>
  )
}

export default App
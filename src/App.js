
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Contact from './pages/Contact'
import About from './pages/About'
import Gallery from './pages/Gallery';
import Practice from './pages/Practice';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element= {<LandingPage/>}/>
        <Route path='/Contact' element= {<Contact/>}/>
        <Route path='/About' element= {<About/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Practice' element={<Practice/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

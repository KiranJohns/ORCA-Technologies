import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Projects, Contact} from './pages'
import Loading1 from './components/Loading1';

 
const App = () => {


  return (
<main >
<Router>
  
  <Navbar/>
  <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />}/>
  </Routes>
</Router>
</main>
  )
}

export default App
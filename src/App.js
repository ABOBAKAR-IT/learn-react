import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Info from './page/Info.jsx'

function App() {
  return (
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/info" element={<Info/>}></Route>
</Routes>
  )
}
export default App;

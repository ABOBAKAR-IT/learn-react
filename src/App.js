import React from "react";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
<Routes>
  <Route path='/' element={<div>home page</div>}/>
  <Route path="/about" element={<div>home about</div>}></Route>
  <Route path="/info" element={<div>home info</div>}></Route>
</Routes>
  )
}
export default App;

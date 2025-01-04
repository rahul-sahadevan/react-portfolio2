import React from "react";
import Layout from "./components/Layout";
import {Routes , Route} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = ()=>{

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App
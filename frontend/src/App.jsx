import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from './pages/Contact.jsx'
import Courses from './pages/Courses.jsx'
import Login from './pages/Login.jsx'
import {Route,Routes} from 'react-router-dom'



function App() {
  return (
    <div>
      <ToastContainer />

      <Header />

      <Routes>

        <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
            <Route path="/contact_us" element={<Contact/>}></Route>
             <Route path="/courses" element={<Courses/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
               <Route path="/*" element={"Galat page pe ho bhai"}></Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App

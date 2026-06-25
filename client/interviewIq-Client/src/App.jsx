import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
  <>
    <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              //   transition={Bounce}
            />
  <BrowserRouter>
     <Routes>
            <Route path="/" element={<Home/>}/>
           <Route  path="/signup" element={<Signup/>}/>
           <Route path="/login" element={<Login/>}/>

     </Routes>

  </BrowserRouter>
  </>
  )
}

export default App
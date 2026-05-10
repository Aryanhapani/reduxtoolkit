import React from 'react'
import { fetchphoto, fetchvideo ,fecthgif} from './api/Mediaapi'

import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Collectionpage from './pages/Collectionpage'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

 

  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
       <Navbar/>

      <Routes>
        <Route path='/'   element={<Homepage/>}/>
        <Route path='/collection'   element={<Collectionpage/>}/>
      </Routes>

      <ToastContainer/>
      
      </div>
  )
}

export default App

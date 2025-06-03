import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import MainLoading from './components/MainLoading'

function App() {

  const [loading,setloading] = useState<boolean>(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setloading(false)
    },3000)
    return ()=> clearTimeout(timer)
  })

  if(loading){
    return <MainLoading/>
  }
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </Router>
  )
}

export default App

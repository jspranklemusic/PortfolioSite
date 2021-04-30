import './App.css';
import Header from "./components/layout//Header"
import React, {useState, useEffect} from 'react'

//views
import PortfolioBar from "./components/jsx/PortfolioBar"
import Home from './components/views/Home'
import Testimonials from './components/views/Testimonials'
import Contact from './components/views/Contact'


function App() {

  const [hash, setHash] = useState("#home")
  function hashState(){
      setHash(window.location.hash)
  }
  useEffect(()=>{
      window.addEventListener('popstate',hashState)
      setHash(window.location.hash || "#home");
  },[])
  useEffect(() => {
      return () => {
          window.removeEventListener('popstate',hashState)
      }
  }, [])

  return (
    <div className="App">

      <Header></Header>
      <div name="grid-space-occupant"></div>

      <main id="content">
        { hash == "#home" && <Home></Home>}
        { hash == "#portfolio" && <PortfolioBar></PortfolioBar>}
        { hash == "#testimonials" && <Testimonials></Testimonials>}
        { hash == "#contact" && <Contact></Contact>}
      </main>
      
      
      
    </div>
  );
}

export default App;

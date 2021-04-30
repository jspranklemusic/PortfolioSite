import './App.css';
import Header from "./components/layout//Header"
import React, {useState, useEffect} from 'react'

//views
import PortfolioBar from "./components/jsx/PortfolioBar"
import Home from './components/views/Home'
import Testimonials from './components/views/Testimonials'
import Contact from './components/views/Contact'
import projects from '../src/data/projects.json'
import stories from '../src/data/stories.json'




function App() {

  const [hash, setHash] = useState("#home")
  function hashState(){
      setHash(window.location.hash)
  }

  useEffect(()=>{


      window.addEventListener('popstate',hashState)
        setHash(window.location.hash || "#home");
      function resize(){
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
      
      // We listen to the resize event
      window.addEventListener('resize', () => {
        resize();
      });
      
      resize();

      //preloading images
      projects.forEach(project => {
        const img = new Image();
        img.src = "/assets/images/" + project.image
      });
      stories.forEach(story => {
        const img = new Image();
        img.src = "/assets/images/" + story.image
      });

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

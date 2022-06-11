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

const svgs = {
   javascript : '/assets/icons/javascript/javascript-original.svg',
   node : '/assets/icons/nodejs/nodejs-original.svg',
   html : '/assets/icons/html5/html5-original.svg',
   css : '/assets/icons/css3/css3-original.svg',
   vue : '/assets/icons/vuejs/vuejs-original.svg',
   react : '/assets/icons/react/react-original.svg',
   mongodb : '/assets/icons/mongodb/mongodb-original.svg',
   python : '/assets/icons/python/python-original.svg',
   mysql : '/assets/icons/mysql/mysql-plain.svg'
}


function App() {

  const [hash, setHash] = useState("#home")
  function hashState(){
      const Content = document.querySelector(".fade-basic");
      Content.classList.remove("fade-basic")
      Content.classList.add("next-link")
      
      
      setTimeout(()=>{
        setHash(window.location.hash)
        document.querySelector("main").scrollTo(0,0)
      },300)
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

      window.images = {}

      //preloading images
      projects.forEach(project => {
        const img = new Image();
        img.src = "/assets/images/" + project.image
        window.images[project.image] = img;
      });
      stories.forEach(story => {
        const img = new Image();
        img.src = "/assets/images/" + story.image
        window.images[story.image] = img;
      });
      for(let svg in svgs){
        const img = new Image();
        img.src = svgs[svg];
        window.images[svgs[svg]] = img;
      }

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
        { hash === "#home" && <Home></Home>}
        { hash === "#portfolio" && <PortfolioBar></PortfolioBar>}
        {/* { hash === "#testimonials" && <Testimonials></Testimonials>} */}
        { hash === "#contact" && <Contact></Contact>}
      <div style={{height:"1rem"}}></div>
        
      </main>
      

      
    </div>
  );
}

export default App;

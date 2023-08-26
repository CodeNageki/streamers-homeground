import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Poke from './components/Pokemon'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return(<>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Poke/>
      <Contact/>
      <Footer/>
    </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

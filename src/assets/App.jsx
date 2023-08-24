import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Poke from './components/Pokemon'

const App = () => {
    return(<>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Poke/>
    </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

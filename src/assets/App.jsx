import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
    return(<>
      <Navbar/>
      <Hero/>
    </>)

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar/navbar'

const App = () => {
    return <Navbar/>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

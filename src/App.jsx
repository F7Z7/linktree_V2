import { useState } from 'react'
import './App.css'
import Home from "./Home.jsx";
import Card1 from "./Components/Card1.jsx";
import socials from "./assets/data/socials.jsx";
import MovingGradient from "./Components/movingGrad.js";
import Background from "./Components/background.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Background/>
          <Home/>
      </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Home from "./Home.jsx";
import Card from "./Components/Card.jsx";
import socials from "./assets/data/socials.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Home/>
          <Card socials={socials}/>
      </>
  )
}

export default App

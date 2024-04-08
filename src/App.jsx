import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Section from "./components/section/Section"
import "./App.css"
import "./index.css"

import "./App.css"
const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hero">
          <Hero />
          </div>
        
<div className="rev">
          <Section />
        </div>


        </div>

      

    </>
  )
}

export default App


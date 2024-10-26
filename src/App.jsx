
import { useState } from "react";
import Foods from "./components/Header/Foods/Foods"
import Header from "./components/Header/Header"
import HeroSection from "./components/Header/HeroSection/HeroSection"



function App() {
  
  const [calculate, setCalculate] = useState([]);


  const handleCalculate = (food) =>{
    const newCalculate = [...calculate, food]
    setCalculate(newCalculate)
    
  }

  return (
    <>
    <div className="container mx-auto px-5">

      <Header></Header>
      <HeroSection></HeroSection>
      <Foods handleCalculate={handleCalculate} calculate={calculate}></Foods>
    </div>
    </>
  )
}

export default App

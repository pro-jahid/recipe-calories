
import { useState } from "react";
import Foods from "./components/Header/Foods/Foods"
import Header from "./components/Header/Header"
import HeroSection from "./components/Header/HeroSection/HeroSection"



function App() {
  
  const [calculate, setCalculate] = useState([]);

  const handleRemove = (id) =>{
    const remaining = calculate.filter(remove => remove.recipe_id !== id)
    
    setCalculate(remaining)
    
    
  }

  

  const handleCalculate = (food) =>{
    const exitsFood = calculate.find(f => f.recipe_id === food.recipe_id)
    if(!exitsFood){
      
      const newCalculate = [...calculate, food]
      setCalculate(newCalculate)
      return
    }
    else{
      alert(`This Food ${food.recipe_name} is already on preparing stage`)
    }
    
    
  }

  return (
    <>
    <div className="container mx-auto px-5">

      <Header></Header>
      <HeroSection></HeroSection>
      <Foods handleRemove={handleRemove} handleCalculate={handleCalculate} calculate={calculate}></Foods>
    </div>
    </>
  )
}

export default App

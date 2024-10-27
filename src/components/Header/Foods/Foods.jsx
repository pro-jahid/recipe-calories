import { useEffect, useState } from "react";
import Food from "../Food/Food";
import CalculateFood from "../CalculateFood/CalculateFood";

const Foods = ({handleCalculate, calculate, handleRemove}) => {
  const [foods, setFoods] = useState([]);

  

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);


  return (
    <div className="mt-24 mb-7 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-5xl text-center font-bold">Our Recipes</h2>
      <p className="text-center mt-6 text-xl sm:text-2xl md:px-5">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="flex flex-wrap mt-8 gap-6">
        <div className="lg:w-7/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {foods.map((food) => (
              <Food handleCalculate={handleCalculate} key={food.recipe_id} food={food} />
            ))}
          </div>
        </div>
        <div className="lg:w-4/12">
         <CalculateFood handleRemove={handleRemove} calculate={calculate}></CalculateFood>
        </div>
      </div>
    </div>
  );
};

export default Foods;

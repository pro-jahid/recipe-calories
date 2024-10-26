import { useEffect, useState } from "react";
import Food from "../Food/Food";
import CalculateFood from "../CalculateFood/CalculateFood";

const Foods = ({handleCalculate, calculate}) => {
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
      <div className="flex gap-6 mt-8">
        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {foods.map((food) => (
              <Food handleCalculate={handleCalculate} key={food.recipe_id} food={food} />
            ))}
          </div>
        </div>
        <div className="lg:w-2/5">
         <CalculateFood calculate={calculate}></CalculateFood>
        </div>
      </div>
    </div>
  );
};

export default Foods;

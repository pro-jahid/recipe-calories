import { MdAccessTime, } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";



const Food = ({ food, handleCalculate }) => {
    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = food;

    return (
        <div className="border border-gray-200 rounded-lg shadow-md p-6">
            <img 
                src={recipe_image} 
                alt={recipe_name} 
                className="w-full h-48 object-cover rounded-lg"
            />
            
            <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold">{recipe_name}</h2>
                <p className="text-gray-600 border-b-2 pb-5">{short_description}</p>
                <div className="pt-3">
                    <strong>Ingredients:  {ingredients.length}</strong>
                    <ul className="list-disc list-inside pl-4 space-y-1 border-b-2 pb-5">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-9 py-3">
                    <p className="flex gap-2 items-center"> <MdAccessTime /> {preparing_time}</p>
                    <p className="flex gap-2 items-center"> <FaFireAlt /> {calories}</p>
                </div>
                <div>
                    <button onClick={()=>handleCalculate(food)} className="bg-green-400 px-5 py-4 rounded-full font-bold">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Food;

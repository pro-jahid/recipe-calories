

const TableCalculate = ({table, handleRemove}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = table;
    
    
    return (
        <div className="flex justify-between gap-9 items-center p-4  bg-gray-200 my-4 rounded">
            <div>{recipe_name}</div>
            <div>{preparing_time}</div>
            <div>{calories}</div>
            <div>
                <button onClick={()=> handleRemove(recipe_id)} className="py-2 px-3 bg-green-400 rounded-full font-bold">Preparing</button>
            </div>
        </div>
    );
};

export default TableCalculate;
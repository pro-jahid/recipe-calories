import TableCalculate from "../TableCalculate/TableCalculate";

const CalculateFood = ({calculate}) => {
    
  return (
    
    <div className="border border-gray-200 rounded-lg shadow-md p-6 pt-4">
      <div className="">
        <h2 className="text-center font-bold text-2xl border-b-2 pb-5">
          Want to cook:{calculate.length}
        </h2>
        <div className="flex justify-between mt-4 text-1xl font-bold">
            <div>Name</div>
            <div>Time</div>
            <div>Calories</div>
            <div></div>
        </div>
      </div>
        {
            calculate.map(table => <TableCalculate key={table.id} table={table}></TableCalculate>)
        }
    </div>
  );
};

export default CalculateFood;

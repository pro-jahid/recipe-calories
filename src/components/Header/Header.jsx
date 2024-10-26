import { CgProfile, } from "react-icons/cg";



const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-7 px-4 md:px-8 lg:px-12 container">
            <div className="mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Recipe Calories</h2>
            </div>
            <div className="mb-4 md:mb-0">
                <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 text-center">
                    <li className="cursor-pointer hover:text-gray-500">Home</li>
                    <li className="cursor-pointer hover:text-gray-500">Recipes</li>
                    <li className="cursor-pointer hover:text-gray-500">About</li>
                    <li className="cursor-pointer hover:text-gray-500">Search</li>
                </ul>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
                <div className="flex items-center space-x-2">
                    
                    <input
                        className="border rounded-2xl bg-gray-300 p-2 w-full md:w-auto"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="bg-green-400 rounded-full p-2">
                    <CgProfile></CgProfile>
                </div>
            </div>
        </div>
    );
};

export default Header;

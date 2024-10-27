
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiSearch, BiMenu } from "react-icons/bi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex justify-between items-center py-5 px-4 md:px-8 lg:px-12 container">
            <div className="flex items-center space-x-2">
                <h2 className="text-2xl xl:text-4xl font-bold">Recipe Calories</h2>
            </div>

            <div className="md:hidden flex items-center">
                <BiMenu
                    className="text-3xl cursor-pointer hover:text-gray-500"
                    onClick={handleMenuToggle}
                />
            </div>

            <div
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } flex-col md:flex-row md:flex items-center space-y-3 md:space-y-0 md:space-x-4 
                md:mt-0 absolute md:static top-full left-0 w-full md:w-auto mt-2 bg-gray-100 md:bg-transparent p-4 md:p-0 z-10 md:justify-center`}
            >
                <ul className="flex flex-col md:flex-row md:space-x-7 space-y-2 md:space-y-0 text-center w-full md:w-auto">
                    <li className="cursor-pointer hover:text-gray-500">Home</li>
                    <li className="cursor-pointer hover:text-gray-500">Recipes</li>
                    <li className="cursor-pointer hover:text-gray-500">About</li>
                    <li className="cursor-pointer hover:text-gray-500">Contact</li>
                </ul>
            </div>
            <div className="hidden md:flex items-center space-x-2 w-full md:w-auto justify-end">
                <input
                    className="border rounded-2xl bg-gray-300 p-2 w-full md:w-auto"
                    type="text"
                    placeholder="Search"
                />
                <CgProfile className="text-3xl cursor-pointer bg-green-400 rounded-full p-1 hover:text-gray-500" />
            </div>
            <div className="md:hidden flex items-center space-x-2">
                <BiSearch className="text-2xl cursor-pointer hover:text-gray-500" />
                <CgProfile className="text-3xl cursor-pointer bg-green-400 rounded-full p-1 hover:text-gray-500" />
            </div>
        </div>
    );
};

export default Header;

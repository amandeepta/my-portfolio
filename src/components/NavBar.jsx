
function NavBar() {
    return (
            <nav className="
            absolute top-0 right-0 w-max px-4
             bg-white border border-gray-300 lg:rounded-bl-[2rem] shadow-lg 
                max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:z-1 max-md:h-min max-md:top-auto max-md:opacity-70
                max-md:z-10 max-md:rounded-t-2xl
            ">
                <ul className=" flex space-x-3 lg:space-x-6 text-green px-5 items-center py-3 max-md:justify-evenly font-bold
                ">
                    <li className="hover:underline cursor-pointer ">Home</li>
                    <li className="hover:underline cursor-pointer">Blog</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
            </nav>
    );
}

export default NavBar;

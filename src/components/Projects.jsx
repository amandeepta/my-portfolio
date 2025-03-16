import { Link } from 'react-router-dom';
import Data from './ProjectData';

function Projects() {
    return (
        <div className="m-6 p-8 bg-[#080d28] w-full max-w-4xl mx-auto rounded-2xl shadow-2xl">
            {Data.map((item, index) => (
                <div key={index} className="mb-10">
                    <Link 
                        to={item.gitLink}  
                        className="cursor-pointer group flex flex-col md:flex-row items-center gap-12"
                    >
                        {/* Project Details */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                {item.name}
                            </h1>
                            <p className="text-gray-400 text-md mt-2 leading-relaxed">
                                {item.discription}
                            </p>
                        </div>

                        {/* Project Image */}
                        <div className="rounded-xl shadow-lg overflow-hidden w-full sm:w-80 md:w-96 h-72">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="rounded-xl w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </Link>

                    {/* Faded Gradient Divider */}
                    {index !== Data.length - 1 && (
                        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8"></div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Projects;

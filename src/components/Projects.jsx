import { Link } from 'react-router-dom';
import Data from './ProjectData';

function Projects() {
    return (
        <div className='m-4 p-6 bg-[#080d28] w-full max-w-screen-lg mx-auto rounded-lg shadow-xl'>
            {Data.map((item, index) => (
                <div key={index}>
                    <Link 
                        to={item.gitLink}  
                        className="mb-8 cursor-pointer group relative flex flex-col md:flex-row items-center gap-8"
                    >
                        {/* Project Details */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className='text-2xl md:text-2xl font-bold text-white'>{item.name}</h1>
                            <p className='text-gray-400 text-md md:text-md mt-2'>{item.discription}</p>
                        </div>

                        {/* Project Image */}
                        <div className="rounded-xl shadow-lg w-full sm:w-80 md:w-96 h-72">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className='rounded-xl w-full h-72 object-contain transition-transform duration-300'
                            />
                        </div>
                    </Link>

                    {/* Faded Black Line */}
                    {index !== Data.length - 1 && (
                        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Projects;

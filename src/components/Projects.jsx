import Data from './ProjectData';

function Projects() {
    return (
        <div className='m-4 p-4 bg-[#080d28] relative'>
            {Data.map((item, index) => (
                <div 
                    key={index} 
                    className="mb-9 cursor-pointer group relative"
                >
                    <h1 className='text-lg font-bold'>{item.name}</h1>
                    <p className='text-gray-300'>{item.discription}</p>
                    <img src={item.image} alt={item.title} className='rounded-md' />

                    {/* Hover effect to show project details */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                        <h2 className='text-2xl font-bold text-white'>{item.name}</h2>
                        <p className='text-gray-300 mb-4'>{item.discription}</p>
                        <button 
                            className='mt-2 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600'
                            onClick={() => window.open(item.link)}
                        >
                            View Project
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;

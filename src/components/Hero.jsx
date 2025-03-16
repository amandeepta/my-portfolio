import NavBar from './NavBar';
import Projects from './Projects';


function Hero() {
    return (
        <div className="w-auto h-max relative bg-[#060f21]
        p-6 rounded-2xl shadow-md text-white border border-gray-700"> 
          <p className="mb-6 text-lg font-mono text-gray-300 leading-relaxed">
    <span className="text-yellow-500 font-semibold">Greetings!</span><br />
    <span className="block mt-4">You've arrived at my corner of the web. Take a moment to explore, wander, and dive into my latest projects and ideas.</span><br />
    
    I hope you enjoy exploring my work as much as I enjoyed creating it.
</p>


            <h2 className="text-2xl font-bold mb-2Az font-serif text-[#cfbcc6]">Projects</h2>
            <div className="bg-[#e72a30] w-[40px] h-[5px] my-3"></div>
            <Projects/>

        </div>
    );
}

export default Hero;

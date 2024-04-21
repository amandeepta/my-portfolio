import NavBar from './NavBar';
import Projects from './Projects';


function Hero() {
    return (
        <div className="w-auto h-max relative bg-[#EEEBDD]
        p-6 rounded-2xl shadow-md">
            <NavBar />
            <h2 className="text-2xl font-bold mb-2 font-serif">About Me</h2>
            <div className="bg-yellow-600 w-[40px] h-[5px] my-3"></div>
            <p className="mb-3 text-lg font-mono">
            Passionate second-year Computer Science student with a keen interest in technology and innovation.
            Proficient in Java, Python, and C++, with a strong grasp of data structures, algorithms, and software development. 
            Eager to leverage skills and drive growth in collaborative environments. Seeking opportunities to contribute to 
            impactful projects and further expand expertise. Let's connect and explore possibilities in tech and innovation together.
            </p>

            <h2 className="text-2xl font-bold mb-4 font-serif">Projects</h2>

            <Projects/>

        </div>
    );
}

export default Hero;

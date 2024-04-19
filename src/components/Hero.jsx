import image1 from '../assets/1.jpg';
import NavBar from './NavBar';

function Hero() {
    return (
        <div className="w-auto h-full relative bg-white p-6 rounded-lg shadow-md">
            <NavBar />
                <h2 className="text-xl font-bold mb-2">About Me</h2>
                <div className='bg-yellow-600 w-[40px] h-[5px] my-3'></div>
                <p className='mb-3'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in
                     web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                     My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I add personal touch to your product and make sure
                    that is eye-catching and easy to use. My aim is to bring across your message and 
                    identity in the most creative way. I created web design for many famous brand companies.
                </p>
                <div className=''>
                    <h2 className='text-2xl font-bold '>Projects</h2>
                    

                </div>
        
        </div>
    );
}

export default Hero;

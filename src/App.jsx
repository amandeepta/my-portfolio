import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./components/Hero";
import Mycard from "./components/Mycard";
import NavBar from "./components/NavBar";
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div className="bg-black py-12 px-16 lg:py-16 lg:px-24 
             lg:space-x-12 max-md:py-4 max-md:px-4 h-screen overflow-y-auto">
                <div className='flex max-md:flex-col lg:flex-row max-md:space-y-10 lg:space-x-11 md:space-x-6 w-full'>
                    <Mycard />
                    <div className='relative w-full'>
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/blogs" element={<Blog />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                        <NavBar />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

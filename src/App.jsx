import Hero from "./components/Hero";
import Mycard from "./components/Mycard";

function App() {
    return (
        <div className="bg-black 
        flex flex-col lg:flex-row py-12 px-16 lg:py-16 lg:px-24 space-y-8 lg:space-y-0 lg:space-x-12
         max-md:py-4 max-md:px-4 h-screen overflow-y-auto relative">
            <Mycard />
            <Hero />
        </div>
    );
}

export default App;

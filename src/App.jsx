import Hero from "./components/Hero";
import Mycard from "./components/Mycard";

function App() {
    return (
        <div className="bg-black min-h-screen flex flex-col lg:flex-row py-10 px-[6rem] space-y-8 lg:space-y-0 lg:space-x-8
        max-md:py-10 max-md:px-8">
            <Mycard />
            <Hero />
        </div>
    );
}

export default App;

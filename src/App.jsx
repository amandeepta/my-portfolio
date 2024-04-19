import Hero from "./components/Hero";
import Mycard from "./components/Mycard";

function App() {
    return (
        <div className="bg-black min-h-screen flex flex-col lg:flex-row p-8 space-y-8 lg:space-y-0 lg:space-x-8">
            <Mycard />
            <Hero />
        </div>
    );
}

export default App;

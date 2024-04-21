function PCards({ id, name, discription, gitLink}) {
    function openLink() {
        window.open(gitLink, '_blank');
    }

    return (
        <div
            className="flex flex-col bg-[#EEEBDD] rounded-lg shadow-lg w-auto p-4 hover:shadow-xl 
            transition-transform transform hover:scale-105 border border-black cursor-pointer m-4 max-md:mb-3 max-md:m-1"
            onClick={openLink}
        >
            <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-500 transition-colors duration-200">{name}</h3>
            <p className="text-md text-gray-700">{discription}</p>
        </div>
    );
}

export default PCards;

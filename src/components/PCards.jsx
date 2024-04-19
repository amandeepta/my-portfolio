function PCards({ id, name, discription, gitLink}) {
    function openLink() {
        window.open(gitLink, '_blank');
    }

    return (
        <div
            className="flex flex-col -z-10 bg-white rounded-lg shadow-lg w-auto p-4 hover:shadow-xl 
            transition-transform transform hover:scale-105 border border-gray-300 cursor-pointer my-10"
            onClick={openLink}
        >
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-lg">{discription}</p>
        </div>
    );
}

export default PCards;

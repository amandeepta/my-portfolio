import { useState } from "react";
import { TfiAngleUp, TfiAngleDown,} from "react-icons/tfi";
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaGithub, FaDiscord } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import image from '../assets/IMG_6822.JPG';

function Mycard() {
    const contactInfo = [
        {
            type: 'email',
            icon: <AiTwotoneMail className="w-9 h-7" />,
            text: 'Email',
            href: 'mailto:amandiptaitis@gmail.com',
            name : 'amandiptaitis@gmail.com',
        },
        {
            type: 'LinkedIn',
            icon: <FaLinkedin className="w-9 h-7 text-blue-500" />,
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/aman-dipta/',
            name : 'amandeepta',
        },
        {
            type: 'Instagram',
            icon: <FaInstagram className="w-9 h-7 text-pink-400" />,
            text: 'Instagram',
            href: 'https://www.instagram.com/amandipta/',
            name : 'amandipta',
        },
        
    ];


    const[isOpen,setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!isOpen);
    }
    return (
        <aside className="lg:sticky lg:top-0 p-10 bg-[#EEEBDD]

        rounded-2xl w-[350px] h-max shadow-md max-md:w-full max-md:relative">
            <div className="flex flex-col w-full">
                <img src = {image} alt = "my image" className="rounded-3xl w-auto shadow-2xl object-cover border-4
                 border-[#020103] shadow-3xl"></img>
                <h1 className="w-full font-bold text-center mt-4 text-3xl mb-2 font-serif text-[#080f24]">Aman Deepta</h1>

                <button className="lg:hidden max-md:block absolute right-0 top-0 border h-[2.5rem]
                 border-black shadow-md p-2 rounded-lg rounded-tr-2xl  bg-gradient-to-br from-[#04052e] to-[#bfbdc1] text-white" onClick={toggleMenu}>
                    {isOpen? <TfiAngleUp/> : <TfiAngleDown/>}
                </button>

                

                <div className={`${isOpen ? 'block ' : 'hidden' } lg:flex flex-col space-y-6 `}>
                    
                    <div className="w-full h-1 bg-yellow-600 shadow-md mt-1"></div>

                    <div className="flex flex-col space-y-6">
                        {
                            contactInfo.map((contact, index) => {
                                return (
                                    <div key={index} className="flex flex-row items-center space-x-4 hover:scale-105">
                                        {contact.icon}

                                        <div className="flex flex-col ">
                                            <p className="w-full font-serif">{contact.text}</p>
                                            <a href={contact.href} className="text-black ">
                                                {contact.name}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div className="w-full h-1 bg-yellow-600 shadow-md mt-1"></div>

                        <div className="flex flex-row justify-evenly">
                            <a href = "https://discordapp.com/users/storm_16406"  aria-label="Discord link" target="" className=" "> <FaDiscord className="w-9 h-5"/></a>
                            <a href = "https://t.me/amandipta" aria-label="Telegram link" target="_blank" className=""><FaTelegramPlane className="w-9 h-5 "/></a>
                            <a href = "https://github.com/amandeepta" aria-label="Github Link" target="_blank" className=""><FaGithub className="w-9 h-5"/></a>
                        </div>
                    </div>

                    

                </div>
            </div>
        </aside>
    )
}

export default Mycard;
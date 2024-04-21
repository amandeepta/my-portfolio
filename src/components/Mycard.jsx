import { useState } from "react";
import { TfiAngleUp, TfiAngleDown,} from "react-icons/tfi";
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import image from '../assets/1.jpg';

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
            href: 'https://wa.me/yourphonenumber',
            name : 'amandipta',
        },
        
    ];


    const[isOpen,setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!isOpen);
    }
    return (
        <aside className="sticky top-0 p-10 bg-[#EEEBDD]

        rounded-2xl w-[350px] h-max shadow-md max-md:w-full">
            <div className="flex flex-col w-full">
                <img src = {image} alt = "my image" className="rounded-3xl w-auto shadow-2xl object-cover border
                 border-black hover:shadow-3xl transition-shadow duration-200 hover:scale-105"></img>
                <h1 className="w-full font-bold text-center mt-4 text-3xl mb-4 font-serif">Aman Deepta</h1>

                <button className="lg:hidden max-md:block absolute right-0 top-0 border h-[2.5rem]
                 border-black shadow-md p-2 rounded-lg rounded-tr-2xl  bg-gradient-to-br from-[#04052e] to-[#bfbdc1] text-white" onClick={toggleMenu}>
                    {isOpen? <TfiAngleUp/> : <TfiAngleDown/>}
                </button>

                

                <div className={`${isOpen ? 'block ' : 'hidden' } lg:flex flex-col space-y-6 `}>
                    
                    <div className="w-full h-0.5 bg-black shadow-md opacity-50 mt-2"></div>

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
                        <div className="w-full h-0.5 bg-black shadow-md opacity-50 mt-2"></div>

                        <div className="flex flex-row justify-evenly">
                            <a href = ""  aria-label="Discord link" target="_blank" className=" "> <FaDiscord className="w-7 h-5"/></a>
                            <a href = " " aria-label="Telegram link" target="_blank" className=""><FaTelegramPlane className="w-7 h-5 "/></a>
                            <a href = "" aria-label="Twitter link" target="_blank" className=""><FaTwitter className="w-7 h-5"/></a>
                        </div>
                    </div>

                    

                </div>
            </div>
        </aside>
    )
}

export default Mycard;
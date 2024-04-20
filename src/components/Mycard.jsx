import { useState } from "react";
import { TfiAngleUp, TfiAngleDown, TfiLinkedin, } from "react-icons/tfi";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import image from '../assets/1.jpg'
function Mycard() {
    const contactInfo = [
        {
            type: 'email',
            icon: <AiTwotoneMail className="w-9 h-7" />,
            text: 'Email',
            href: 'mailto:amandiptaitis@gmail.com',
        },
        {
            type: 'telegram',
            icon: <FaTelegramPlane className="w-9 h-7" />,
            text: 'Telegram',
            href: 'https://t.me/yourtelegramhandle',
        },
        {
            type: 'whatsapp',
            icon: <FaInstagram className="w-9 h-7" />,
            text: 'Instagram',
            href: 'https://wa.me/yourphonenumber',
        },
        
    ];


    const[isOpen,setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!isOpen);
    }
    return (<>
        <aside className="sticky p-10 bg-[white] rounded-2xl w-auto -z-2">
            <div className="flex flex-col w-full">
                <img src = {image} alt = "my image" className="rounded-lg w-xl "></img>
                <h1 className="w-full font-bold text-center p-4 text-xl">Aman Deepta</h1>

                <button className="lg:hidden max-md:block absolute right-0 top-0 border
                 border-gray-300 shadow-md p-2 rounded-lg rounded-tr-2xl  bg-gradient-to-br from-black to-white" onClick={toggleMenu}>
                    {isOpen? <TfiAngleUp/> : <TfiAngleDown/>}
                </button>

                

                <div separator className={`${isOpen ? 'block' : 'hidden' } lg:flex flex-col space-y-6` }>
                    
                    <div className="w-full h-0.5 bg-black shadow-md opacity-75"></div>

                    <div className="flex flex-col space-y-6">
                        {
                            contactInfo.map((contact, index) => {
                                return (
                                    <div key={index} className="flex flex-row items-center space-x-4">
                                        {/* Render the icon */}
                                        {contact.icon}

                                        <div className="flex flex-col space-y- ">
                                            <p className="text-center pr-2">{contact.text}</p>

                                            {/* Render the link */}
                                            <a href={contact.href} className="text-blue-500 underline">
                                                {contact.href}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>


                </div>
            </div>
        </aside>
    </>)
}

export default Mycard;
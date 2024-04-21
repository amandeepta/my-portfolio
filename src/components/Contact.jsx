import { useState } from "react";

function Contact() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        alert("Message send");
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="flex flex-col space-y-6 bg-[#EEEBDD] w-auto h-max relative 
        p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-2 font-serif">Contact</h2>
            <div className="bg-yellow-600 w-[40px] h-[5px] my-3"></div>
                <form
                        onSubmit={handleSubmit}
                        action=""
                        method="POST"
                        className="space-y-4 flex flex-col"
                    >
                        {/* Name input */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="font-medium text-gray-700">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Email input */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Message textarea */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="font-medium text-gray-700">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="p-2 border rounded-md"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-700"
                        >
                            Submit
                        </button>
                    </form>

        </div>
    )
}

export default Contact;
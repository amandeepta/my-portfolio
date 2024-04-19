import { useState } from "react";

function Mycard() {
    const[isOpen,setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!isOpen);
    }
    return (<>
        <aside className="sticky p-[60px 30px 30px] bg-[#1E1E1F]">
            <div>
                Hellow 
            </div>
        </aside>
    </>)
}

export default Mycard;
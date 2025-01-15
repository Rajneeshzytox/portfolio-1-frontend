import { useState } from "react"


// NAv ITEMS
const NavItems = ({items, setActive, isExpand}) => {

    // obj =[ {id:0, text:projects, icon:}, ...]
    return (
        <>
        { items.length &&
            items.map((obj) => (

                <div 
                    onClick={()=>setActive(Number(obj.id))}
                    key={obj.id}
                    className={`flex flex-nowrap  items-center gap-3 w-full ${!isExpand? "max-sm:hidden justify-center" : "px-6 justify-start"} transition-all  py-1 bg-gray-600 hover:bg-gray-300 hover:text-gray-900 rounded-md cursor-pointer`}
                    
                >
                    
                    {/* nav item icon */}
                    <span className=" aspect-square rounded-lg text-gray-900 grid place-content-center">
                        {obj.icon}
                    </span>

                    {/* nav item text */}
                    {
                        isExpand &&
                        <p className="">
                            {obj.text}
                        </p>

                    }
                </div>
            ))
        }
        </>
    )
}



export default function NavBar({setActive}){
    const [expand, setexpand] = useState(false)

    const [navItems, setNavItems] = useState([
        {id:0, text:'Projects', icon: "🃏"},
        {id:1, text:'Options', icon: "✨"},
    ])

    // set Expand to true/false
    const handleClick=()=>{
        setexpand((pre) => !pre)
    }
    return(
        <>
        <div className={`transition-all flex sm: flex-col gap-6 overflow-hidden sm:py-6 py-4 px-4`}>

            {/* Nav Logo */}
            <div className="flex justify-start items-center gap-3">
                {/* nav button */}
                <button className="w-8 aspect-square bg-gray-300 rounded-lg text-gray-900 inline-block" onClick={handleClick}>o</button>
                
                {/* Nav Logo text */}
                {
                    expand &&
                    <h2 className="text-lg font-semibold">Admin</h2>
                }
            </div>


            {/* NAv Items */}
            <div className="flex flex-col gap-2">
                <NavItems items={navItems} setActive={setActive} isExpand={expand} />
            </div>
            
        </div>
        </>
    )
}
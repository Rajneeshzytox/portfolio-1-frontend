import { useState } from "react"
import { NavLink } from "react-router-dom"

// NAv ITEMS
const NavItems = ({items, isExpand}) => {

    // obj =[ {id:0, text:projects, icon:}, ...]
    return (
        <>
        { items.length &&
            items.map((obj) => (

                <NavLink 
                    to={`${obj.url}`}
                    end={obj.end}
                    key={`option_${obj.id}`}
                    className={({ isActive }) =>
                        `flex flex-nowrap items-center gap-3 w-full transition-all py-1 rounded-md cursor-pointer
                         ${!isExpand ? "max-sm:hidden justify-center" : "px-6 justify-start"} 
                         ${isActive ? "bg-blue-700 text-gray-200" : "bg-gray-600 hover:bg-gray-300 hover:text-gray-900"}`
                      }
                    
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
                </NavLink>
            ))
        }
        </>
    )
}



export default function NavBar(){
    const [expand, setexpand] = useState(false)

    const [navItems, setNavItems] = useState([
        {id:1, url: '', text:'Dashboard', icon: "D", end:true},
        {id:2, url: 'projects', text:'projects', icon: "🃏", end:false},
        {id:3, url: 'options', text:'options', icon: "✨", end:false},
    ])

    // set Expand to true/false
    const handleClick=()=>{
        setexpand((pre) => !pre)
    }
    return(
        <>
        <div className={`transition-all flex sm: flex-col gap-6 overflow-hidden sm:py-6 py-4 px-4 
            `}>

            {/* Nav Logo */}
            <div className="flex justify-start items-center gap-3">
                {/* nav button */}
                <button className="w-8 aspect-square bg-gray-300 rounded-lg text-gray-900 inline-block" onClick={handleClick}>o</button>
                
                {/* Nav Logo text */}
                {
                    <h2 className={`max-sm:block ${!expand?"hidden":""}  text-lg font-semibold`}>Admin</h2>
                }
            </div>


            {/* NAv Items */}
            <div className="flex flex-col gap-2">
                <NavItems items={navItems} isExpand={expand} />
            </div>
            
        </div>
        </>
    )
}
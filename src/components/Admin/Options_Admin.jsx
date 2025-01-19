import { useState } from "react"

// ROUTER NavLINK, outlet, 
import { NavLink, Outlet } from "react-router-dom"

// -------------- MAIN OPTION ADMIN --------------
export default function Options_Admin(){
    
    // option form Input 
    const [OptionInputValue, setOptionInputValue] = useState('');

    // Option Form data {map to show list on nav} 
    const optionFormData = [
        {url:"tags" ,title:'Tags'},
        {url:"categories", title:'Categories'},
        {url:"status", title:'Status'},
        
    ]

    return (
        <>

            {/* Top Nav for tags/cateeories ... */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 justify-center sm:py-2 py-4 px-3 sm:items-center *:px-4 *:py-1 *:rounded-[5rem] bg-gray-900 sm:my-4 sm:rounded-[10rem] sm:max-w-[500px] sm:w-max sm:mx-auto">
                {
                    optionFormData.length &&
                    optionFormData.map((option)=>(
                        <NavLink  
                            key={option.title}
                            to={option.url}
                            className={`${false}?'bg-gray-200 text-gray-700': 'bg-gray-700'}`}
                            onClick={()=>setOptionInputValue("")}
                        >
                            {option.title}
                        </NavLink>
                    ))
                }            
            </div>
            
            {/* Option form & List */}
                <Outlet context={{OptionInputValue, setOptionInputValue}}/>
  
        </>
    )
}

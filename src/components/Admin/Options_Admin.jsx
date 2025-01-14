import { useState, useEffect } from "react"

// data tags/categories/status
import { loadTags, loadCategories, loadStatus } from "./Data/api"

// child compoenetst 
import RenderOptionList from "./options/RenderOptionList"



export default function Options_Admin(){
    // states (tags/categories/status)
    const [tagState, setTagState] = useState([
        {id:1, name:"html"},
        {id:2, name:"css"},
        {id:3, name:"js"},
    ])
    const [categoriesState, setCategoriesState] = useState([
        {id:1, name:"frontend"},
        {id:2, name:"backend"},
        {id:3, name:"database"},
    ])
    const [statusState, setStatusState] = useState([
        {id:1, name:"pending"},
        {id:2, name:"working"},
        {id:3, name:"complete"},
    ])

    const [activeOption, setActiveOption] = useState(0)
    return (
        <>
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 justify-center px-8 sm:items-center py-4 *:px-4 *:py-1 *:rounded-lg bg-gray-900 sm:my-4 sm:rounded-[20rem] sm:max-w-[500px] sm:mx-auto">
                <p 
                    onClick={()=>setActiveOption(0)}
                    className={`${activeOption==0?'bg-gray-200 text-gray-700': 'bg-gray-700'}`}
                >
                        Tags
                </p>

                <p 
                    onClick={()=>setActiveOption(1)}
                    className={`${activeOption==1?'bg-gray-200 text-gray-700': 'bg-gray-700'}`}
                >
                        categories
                </p>

                <p 
                    onClick={()=>setActiveOption(2)}
                    className={`${activeOption==2?'bg-gray-200 text-gray-700': 'bg-gray-700'}`}
                >
                        status
                </p>
                
            </div>


            {/* Option form & List */}
            {
                activeOption == 1?
                    // Categories
                    <RenderOptionList 
                        title={"Categories"}
                        data={categoriesState}
                    />
                : activeOption == 2?

                    // status
                    <RenderOptionList 
                        title={"Status"}
                        data={statusState}
                    />
                :
                    // Tags
                    <RenderOptionList 
                        title={"Tags"}
                        data={tagState}
                    />
            } 
        </>
    )
}

import {NavLink} from "react-router-dom"

const ProjectNav = ({categories, setActiveFilterCategory, setModelActive}) => {
    return(
        <>  
            <nav className="sm:flex text-nowrap *:border *:border-gray-700 *:px-4 *:py-2">


                {/* Go Back Button */}
                <button>
                    <NavLink to={"/"}>Go Back</NavLink>
                </button>

                {/* Filter */}
                <button onClick={()=>setModelActive(true)}>filter</button>
                {/* Filter Options Cotainer */}
                <div className="overflow-x-scroll max-sm:w-full">

                    <div className="flex gap-3 text-nowrap py-2">

                    {/* all categories  */}

                    <button onClick={()=>setActiveFilterCategory('')} className="bg-gray-700 px-4 py-1  text-sm rounded">
                         ALL
                    </button>

                    {/* catgories option filter  */}
                    {
                        categories != []?(
                            categories.map((category)=>(
                                <button
                                    key={category.id + category.name}
                                    onClick={()=>setActiveFilterCategory(category.name)}
                                    className="bg-gray-700 px-4  py-1 text-sm rounded"    
                                >
                                    {category.name}
                                </button>
                            ))
                        ):(
                        ''
                        )
                    }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default ProjectNav;
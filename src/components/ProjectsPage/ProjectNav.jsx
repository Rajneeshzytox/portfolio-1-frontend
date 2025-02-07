import {NavLink} from "react-router-dom"

const ProjectNav = ({categories, addCategory, setModelActive, isCategoryActive}) => {
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

                    <button onClick={()=>addCategory('')} className="bg-gray-700 px-4 py-1  text-sm rounded">
                         ALL
                    </button>

                    {/* catgories option filter  */}
                    {
                        categories != []?(
                            categories.map((category)=>(
                                <button
                                    key={category.id + category.name}

                                    onClick={()=>addCategory(category.name)}

                                    className={`bg-gray-700 px-4  py-1 text-sm rounded ${isCategoryActive(category.name)?"bg-blue-600":""}`}   
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
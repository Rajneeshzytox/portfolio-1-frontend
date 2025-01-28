import {NavLink} from "react-router-dom"

const ProjectNav = ({categories, setActiveFilterCategory}) => {
    return(
        <>  
            <nav className="grid *:border-r *:border-gray-700 *:px-4 *:py-2" style={{gridTemplateColumns: "auto auto 1fr"}}>
                {/* Go Back Button */}
                <button>
                    <NavLink to={"/"}>Go Back</NavLink>
                </button>
                {/* Filter */}
                <button>filter</button>
                {/* Filter Options Cotainer */}
                <div className="overflow-x-scroll">
                    <div className="flex gap-3">
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
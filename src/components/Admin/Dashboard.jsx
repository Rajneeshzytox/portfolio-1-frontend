import { useState } from "react"
// css 
import "../Admin/admin_assets/admin.css"

// components
import ProjectAdmin from "./ProjectAdmin"
import Options_Admin from "./Options_Admin"
import NavBar from "./miniCompoenets/NavBar"




export default function Dashboard(){
    // active component <change in NavBar - NavItems>
    const [active, setActive] = useState(0)
    return (
        <>
        {/* Dashboard */}
        <div 
            className="dashboard sm:grid w-full min-h-[100vh]"
            style={{
                gridTemplateAreas: "'sidebar content'",
                gridTemplateColumns: "auto 1fr",
                gridTemplateRows:"1fr",
            }}
        >

            {/* sidebar */}
            <div 
                className="bg-gray-800"
                style={{
                    gridArea: "sidebar",
                }}
            >
                <NavBar setActive={setActive}/>
            </div>

            {/* content */}
            <div  
                className="max-w-full overflow-hidden"
                style={{
                    gridArea: "content",
                }}
            > 
                {
                    active==1?
                    <Options_Admin/>
                    :
                    <ProjectAdmin/>
                }
            </div>
        </div>
        </>
    )
}
import { Outlet } from "react-router-dom"

// css 
import "../Admin/admin_assets/admin.css"

// components
import NavBar from "./miniCompoenets/NavBar"




export default function Dashboard(){
    // active component <change in NavBar - NavItems>
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
                className="bg-gray-800 backdrop:blur-md relative
                *:sm:sticky *:left-0 *:top-0"
                style={{
                    gridArea: "sidebar",
                }}
            >
                <NavBar/>
            </div>

            {/* content */}
            <div  
                className="max-w-full overflow-hidden"
                style={{
                    gridArea: "content",
                }}
            > 
                {/* child element */}
                {<Outlet/>}
            </div>
        </div>
        </>
    )
}
// css 
import "../Admin/admin_assets/admin.css"

// components
import ProjectAdmin from "./ProjectAdmin"
import Options_Admin from "./Options_Admin"



export default function Dashboard(){
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
                className="bg-gray-800 px-4"
                style={{
                    gridArea: "sidebar",
                }}
            >
                sidebar
            </div>

            {/* content */}
            <div  
                className="max-w-full overflow-hidden"
                style={{
                    gridArea: "content",
                }}
            > 
                <ProjectAdmin/>
            </div>
        </div>
        </>
    )
}
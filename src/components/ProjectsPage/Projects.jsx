import { useState, useEffect} from "react"
import {useSelector} from "react-redux"

// child components
import ProjectNav from "./ProjectNav"
import ProjectCard from "./ProjectCard"


function Projects() {
    
    const projectsFetchData = useSelector(s=>s.projects.data)
    const categoriesFetchData = useSelector(s=>s.categories.data)

    const [activeFilterCategory, setActiveFilterCategory] = useState('');
    const [activeFilterTags, setActiveFilterTags] = useState([]);
    const [activeFilterStatus, setActiveFilterStatus] = useState('');
    const [activeProjectId, setactiveProjectId] = useState(0) 
    

    //  to check if data (string) is in categories (array) of project 
    const isIncludeCategory = (categories, data) =>{
        let include = false
        categories.map((obj) => {
            if(obj.name == data ){
                include =  true
            }
        })
        return include;
    }

    // to check if data (string) is in status (object) of project 
    const isIncludeStatus = (status, data) =>{
        return status.name == data
    }

    // to check if data (array) is in tags (array) of project
    const isIncludeTags = (tags, arrData) =>{
        let include = false
        arrData.map((selectedFilterTag) =>{
            tags.map((tag)=>{
                if(tag.name == selectedFilterTag){
                    include = true
                }  
            })
        })
        return include;
    }

    // to check if filter is selected
    const isFiltered = activeFilterCategory || (activeFilterCategory != []) || activeFilterStatus;

    // projects filtered
    const filteredProjectsArray = isFiltered ? (
            projectsFetchData.filter((project)=>(
                isIncludeCategory(project.categories, activeFilterCategory) ||
                isIncludeTags(project.tags, activeFilterTags) ||
                isIncludeStatus(project.status, activeFilterStatus)
        )) 
    ): (projectsFetchData)



    console.log()

  return(
  <>
    {/* Projects  */}
    <section className="bg-gray-900 text-gray-300 w-full min-h-[100vh] grid grid-cols-2 grid-rows-3
    *:border *:border-gray-700 font-mono md:max-h-screen overflow-hidden"
        style={{
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto 1fr",
        }}
    >

        {/* NAV: with (go back), filter & tags */}
        <header className="project-head-nav col-span-full row-span-1">
            <ProjectNav categories={categoriesFetchData} setActiveFilterCategory={setActiveFilterCategory}/>

            {/* active-filter-container */}
            <div className="active-filter-container col-span-full row-span-1">
                Active Filter: 
                {activeFilterCategory}
                {activeFilterStatus} 
                {activeFilterTags.map((tag)=><span>{tag}</span>)}

            </div>
        </header>

        {/* sidebar */}
        <div className="project-sidebar col-start-1 col-end-2 row-start-2 row-end-3 w-52">
            s
        </div> 

        
        {/* Projects Filtered */}
        <div className="filtered-project-container overflow-y-scroll flex justify-center flex-wrap gap-10">
            {
                filteredProjectsArray.map((project)=>(
                    <ProjectCard project={project} active={{state:activeProjectId, set:setactiveProjectId}}/>
                ))
            }
        </div>
    </section>
  </>
)}

export default Projects;

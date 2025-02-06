import { useState, useEffect, Suspense} from "react"
import {useSelector} from "react-redux"

// child components
import ProjectNav from "./ProjectNav"
import ProjectCard from "./ProjectCard"
import CardDetailsModel from "./CardDetails"

// model
import ProjectModel from "./ProjectModel"
import FilterOption from "./FilterModel"

function Projects() {
    
    const projectsFetchData = useSelector(s=>s.projects.data)
    const categoriesFetchData = useSelector(s=>s.categories.data)
    const statusFetchData = useSelector(s=>s.status.data)
    const tagsFetchData = useSelector(s=>s.tags.data)

    const [activeFilterCategory, setActiveFilterCategory] = useState('');
    const [activeFilterTags, setActiveFilterTags] = useState([]);
    const [activeFilterStatus, setActiveFilterStatus] = useState('');

    const [activeCard, setActiveCard] = useState({active:false, projectData:null})

    const [filterModelActive, setFilterModelActive] = useState(false)
    

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
    const isIncludeStatus = (status, data, bothString=false) =>{
        if(bothString){
            return status == data
        }
        return status.name == data
    }

    // to check if data (array) is in tags (array) of project
    const isIncludeTags = (tags, arrData, single=false) =>{
        let include = false

        if(single){
            arrData.map((selectedFilterTag)=>{
                if(selectedFilterTag == tags){
                    include =true
                }
            })
        }else{
            arrData.map((selectedFilterTag) =>{
                tags.map((tag)=>{
                    if(tag.name == selectedFilterTag){
                        include = true
                    }  
                })
            })
        }

        return include;
    }

    // to check if filter is selected
    const isFiltered = activeFilterCategory || (activeFilterTags.length>0) || activeFilterStatus;

    // projects filtered
    const filteredProjectsArray = isFiltered ? (
            projectsFetchData.filter((project)=>(
                (isIncludeCategory(project.categories, activeFilterCategory) || !activeFilterCategory)
                &&
                (isIncludeTags(project.tags, activeFilterTags) || !activeFilterTags.length)
                &&
                (isIncludeStatus(project.status, activeFilterStatus) || !activeFilterStatus)
        )) 
    ): (projectsFetchData)



    // add tag to tagFilter state
    const addTag = (tag) => {
        // if tag is already selected
        if(isIncludeTags(tag, activeFilterTags, true)){
            // remove if already selected
            setActiveFilterTags(pre=>(pre.filter((selectedTag)=>(selectedTag!=tag))))
            return;
        }

        setActiveFilterTags(pre=>([...pre, tag]))

    }

    // add status to statusFilter state
    const addStatus = (status) => {
        // if tag is already selected
        if(isIncludeStatus(activeFilterStatus, status, true)){
            // remove if already selected
            setActiveFilterStatus('')
            return;
        }

        setActiveFilterStatus(status)

    }


  return(
  <>
    {/* Projects  */}
    <section className="bg-gray-900 text-gray-300 w-full min-h-[100vh]
    *:border *:border-gray-700 font-mono md:max-h-screen overflow-hidden"
        style={{
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto 1fr",
        }}
    >

        {/* NAV: with (go back), filter & tags */}
        <header className="project-head-nav">
            <ProjectNav
                categories={categoriesFetchData}
                setActiveFilterCategory={setActiveFilterCategory}
                setModelActive={setFilterModelActive}
            />
        </header>


        {/* active-filter-container */}
        <div className="active-filter-container py-4 px-6 flex gap-4 overflow-x-scroll">
                Active Filter: 
                {activeFilterCategory}
                {activeFilterStatus} 
                {activeFilterTags.map((tag)=><span>{tag}</span>)}

        </div>
        
        {/* Projects Card (Filtered) */}
        <div className="filtered-project-container overflow-y-scroll flex justify-center flex-wrap gap-10 p-8">
            {
                filteredProjectsArray.map((project)=>(
                    <ProjectCard project={project} active={setActiveCard}/>
                ))
            }
        </div>

        {/* Models */}

        {/* CArd Model */}
        {
            activeCard.active &&
            <CardDetailsModel projectData={activeCard.projectData} setActiveCard={setActiveCard}/>
        }

        {/* Fiter Model */}
        {
            filterModelActive &&
            <ProjectModel setModelActive={setFilterModelActive}>
                    <FilterOption
                        setTags={addTag}
                        setStatus={addStatus}
                        tagData={tagsFetchData}
                        statusData={statusFetchData}
                        isIncludeStatus={isIncludeStatus}
                        isIncludeTags={isIncludeTags}
                        activeTag={activeFilterTags}
                        activeStatus={activeFilterStatus}
                    />
            </ProjectModel>
        }

    </section>
  </>
)}

export default Projects;

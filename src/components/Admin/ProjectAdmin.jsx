import { useState, useEffect} from "react";

// components

// import ProjectForm from "./projects/ProjectForm";
// import ProjectUpdateForm from "./projects/ProjectUpdateFrom";
import ProjectList from "./projects/ProjectList.jsx";
import Form from "./projects/Form.jsx";
// api 
import { 
            loadProjects,
            loadTags, 
            loadCategories, 
            loadStatus 
} from "./Data/api.js";

// data
import { 
            projectsCreateFormData,
            projectUpdateFormData,

} from "./Data/formLabelData.js";


// root admin 
const ProjectAdmin = () => {
    const [projectData, setProjectData] = useState([]);
    const [tagsData, setTagsData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [statusData, setStatusData] = useState([]);
    

    const [updateProjectData, setUpdateProjectData] = useState({
        active:false,
        projectUpdateID: NaN,
        projectUpdateData: {}
    });


    const loadAllProjects = async () => {
        const res = await loadProjects()
        setProjectData(res)
        
       }
    const loadAllTags = async () => {
        const res = await loadTags()
        setTagsData(res)
        
       }
    const loadAllCategories = async () => {
        const res = await loadCategories()
        setCategoriesData(res)
        
       }
    const loadAllStatus= async () => {
        const res = await loadStatus()
        setStatusData(res)
        
       }

    

    useEffect(() => {
        const loadAllState = async () =>{
            const project_val = await loadProjects()
            const tags_val = await loadTags()
            const categories_val = await loadCategories()
            const status_val = await loadStatus()
            setProjectData(project_val)
            setTagsData(tags_val)
            setCategoriesData(categories_val)
            setStatusData(status_val)
        }
        loadAllState()
        
    }, []);
    // console.log(tagsData)

    const projectFormData = projectsCreateFormData(tagsData, categoriesData, statusData);
    const updateProjectFormData = projectUpdateFormData(updateProjectData.projectUpdateData, {tags:tagsData, categories:categoriesData, status:statusData})
    
    // console.log(formLabelData.selectLabels)
    return(
        <>
            <main >
                {
                    !updateProjectData.active?(
                        <div className="w-full overflow-hidden">
                            <Form 
                                formLabelData={projectFormData}
                                isUpdate={updateProjectData.active}
                                loadAllOptions={{
                                    projects: loadAllProjects,
                                    tags: loadAllTags,
                                    categories: loadAllCategories,
                                    status: loadAllStatus,
                                }}
                            />
                            <ProjectList
                                projects={projectData}
                                setUpdate={setUpdateProjectData}
                                loadAllProjects={loadAllProjects}
                            
                            />
                        </div>
                    ) :(
                        
                        <Form
                            formLabelData={updateProjectFormData}
                            isUpdate={updateProjectData.active}
                            loadAllOptions={{
                                projects: loadAllProjects,
                                tags: loadAllTags,
                                categories: loadAllCategories,
                                status: loadAllStatus,
                            }}
                            updateProjects={{
                                state:updateProjectData,
                                set:setUpdateProjectData
                            }}
                        />
                    )

                }
            </main>
        </>
    )
}

export default ProjectAdmin;
import { useState, useEffect} from "react";

// REDUX STATE SELECTOR
import {useSelector} from "react-redux"

// components
import ProjectList from "./projects/ProjectList.jsx";
import Form from "./projects/Form.jsx";

// data
import { 
            projectsCreateFormData,
            projectUpdateFormData,

} from "./Data/formLabelData.js";


// ------------------ PROJECT ADMIN ------------------- 
const ProjectAdmin = () => {

    // REDUX -> STATE DEFINE
    const tagsState = useSelector((state) => state.tags.data)
    const categoriesState = useSelector((state) => state.categories.data)
    const statusState = useSelector((state) => state.status.data)
    

    const [updateProjectData, setUpdateProjectData] = useState({
        active:false,
        projectUpdateID: NaN,
        projectUpdateData: {}
    });

    const projectFormData = projectsCreateFormData(tagsState, categoriesState, statusState);
    const updateProjectFormData = projectUpdateFormData(updateProjectData.projectUpdateData, {tags:tagsState, categories:categoriesState, status:statusState})
    
    return(
        <>
            <main >
                {
                    !updateProjectData.active?(
                        <div className="w-full overflow-hidden">
                            <Form 
                                formLabelData={projectFormData}
                                isUpdate={updateProjectData.active}
                            />
                            <ProjectList
                                // projects={projectData}
                                setUpdate={setUpdateProjectData}
                                // loadAllProjects={loadAllProjects}
                            
                            />
                        </div>
                    ) :(
                        
                        <Form
                            formLabelData={updateProjectFormData}
                            isUpdate={updateProjectData.active}
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
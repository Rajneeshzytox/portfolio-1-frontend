import { useEffect, useState } from "react";
import { createProject, updateProject } from "../Data/api";
// compoenets
import RenderInput from "../miniCompoenets/RenderInputs";
import RenderSelectInputs from "../miniCompoenets/RenderSelectInput";



export default function Form({
    formLabelData,
    loadAllOptions,
    isUpdate,
    updateProjects,
}) {
    const [selectedTagsState, setSelectedTagsState] = useState([])
    const [selectedCategoriesState, setSelectedCategoriesState] = useState([])
    const [selectedStatusState, setSelectedStatusState] = useState([])

    // if Update, then set projects tags to states
    useEffect(()=>{
        const setUpdatevalue = () => {
            setSelectedTagsState(updateProjects.state.projectUpdateData.tags)
            setSelectedCategoriesState(updateProjects.state.projectUpdateData.categories)
            setSelectedStatusState(()=> (
                updateProjects.state.projectUpdateData.status ?
                [updateProjects.state.projectUpdateData.status] :
                []
            ))
        }
        if(isUpdate){
            setUpdatevalue()
            // console.log("update:\n", selectedTagsState)
        }

    }, [])
  



    const FormReset = (inputLabels) => {
        // reset states
        setSelectedTagsState([])
        setSelectedCategoriesState([])
        setSelectedStatusState([])

        // reset all input 
        inputLabels.map((input) => {
            document.getElementById(input.text).value = ""; 
        })

        if(isUpdate){
            // reset update state
            updateProjects.set({
                active:false,
                projectUpdateID: NaN,
                projectUpdateData: {}
            })
        }

        }
   

    // get form data and reset states 
    const getFormData = (inputLabels) => {
        const project_data_json = {};

        // normal inputs value add to (json / object)
        inputLabels.map((input) => {
            project_data_json[input.text] = document.getElementById(input.text).value;
        })

        // selected tags add to json/object
        const tags = selectedTagsState.length ? selectedTagsState.map((obj) => (obj.id)) : [];
        project_data_json['tags'] = tags
        
        // selected categories add to json/object
        const categories = selectedCategoriesState.length? selectedCategoriesState.map((obj) => (obj.id)) : [];
        project_data_json['categories'] = categories
        

        // selected status add to json/object
        const status = selectedStatusState.length? selectedStatusState[0].id : null;
        project_data_json['status'] = status
        
        // cleadr all datta
        FormReset(formLabelData.inputLabels);

        // console.log(JSON.stringify(project_data_json))
        return project_data_json

    }

    // Submit function
    const formSubmit = async (inputLabels) => {
        if( ! document.querySelector('input[name="title"]').value){
            alert("title can't be empty");
            return;
        }

        const projectData = JSON.stringify(getFormData(inputLabels));
        // console.log("ID: ", updateProjects.state.projectUpdateData.id)
        try{
            if(isUpdate){
                await updateProject(updateProjects.state.projectUpdateData.id, projectData)
                console.log("projects update successfullly!")
            }else{
                const res = await createProject(projectData) 
                console.log("project created successfully!\n", res)
            }
            await loadAllOptions.projects();
        }catch(err){
            console.log(err)
        }
        finally{
            if (isUpdate){
                updateProjects.set({
                    active:false,
                    projectUpdateID: NaN,
                    projectUpdateData: {}
                })

            }
        }

        
    }

    return(
        <>
        
        {/* ------ Form Heading ------ */
            isUpdate ?
                <h1>
                    Update Projects {updateProjects.state.projectUpdateData.title} 
                    <span>{updateProjects.state.projectUpdateData.id}</span>
                </h1>
            :   <h1>
                    Create Project
                </h1>
        }
        {
            formLabelData?
            // Form Grid
            <div className="md:grid md:grid-cols-3 m-auto lg:w-[80%] md:max-w-[1024px] p-4 gap-2">

                <RenderInput inputLabels={formLabelData.inputLabels}/>
                <div className="flex flex-wrap gap-2 my-4 md:col-span-2">

                <RenderSelectInputs
                    selectLabels={formLabelData.selectLabels}
                    statesInfo={{
                        tags:{
                            state: selectedTagsState, 
                            set: setSelectedTagsState
                        },
                        categories:{
                            state:selectedCategoriesState,
                            set:setSelectedCategoriesState
                        },
                        status:{
                            state:selectedStatusState,
                            set:setSelectedStatusState
                        },
                    }}
                    loadAllOptions={loadAllOptions}
                />
                </div>
                

                {/* submit button */}
                <button className="button" onClick={()=>formSubmit(formLabelData.inputLabels)}>
                    {isUpdate?"save":"add project"}
                </button>

                
                {/* update cancel button */
                    isUpdate &&
                        <button className="bg-blue-700  w-max px-3 py-1 rounded-md" onClick={()=> FormReset(formLabelData.inputLabels)}>
                            Cancel
                        </button>
                    
                }
            </div>
            :
            <p>Can't get form Data from Project_Admin</p>
        }
        
        </>
    )
}


import { useEffect, useState } from "react";
import { createProject, updateProject } from "../Data/api";
// compoenets
import RenderInput from "../miniCompoenets/RenderInputs";
import RenderSelectInputs from "../miniCompoenets/RenderSelectInput";

// REDUX DISPATCH
import {useDispatch} from "react-redux"
import { addProjecState, updateProjectState } from "../../../reduxStates/slices/projectsSlice";

export default function Form({
    formLabelData,
    // loadAllOptions,
    isUpdate,
    updateProjects,
}) {

    // DISPATCH
    const dispatch = useDispatch();

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
        const project_data_to_add_state = {};

        // normal inputs value add to (json / object)
        inputLabels.map((input) => {
            project_data_json[input.text] = document.getElementById(input.text).value;
            project_data_to_add_state[input.text] = document.getElementById(input.text).value;
        })

        // selected tags add to json/object
        const tags = selectedTagsState.length ? selectedTagsState.map((obj) => (obj.id)) : [];
        project_data_json['tags'] = tags
        project_data_to_add_state['tags'] = selectedTagsState.length ? selectedTagsState: [];

        
        // selected categories add to json/object
        const categories = selectedCategoriesState.length? selectedCategoriesState.map((obj) => (obj.id)) : [];
        project_data_json['categories'] = categories
        project_data_to_add_state['categories'] = selectedCategoriesState.length ? selectedCategoriesState: [];

        // selected status add to json/object
        const status = selectedStatusState.length? selectedStatusState[0].id : null;
        project_data_json['status'] = status
        project_data_to_add_state['status'] = selectedStatusState.length? selectedStatusState[0] : null;

        // cleadr all datta
        FormReset(formLabelData.inputLabels);

        // console.log(JSON.stringify(project_data_json))
        return ({project_data_json, project_data_to_add_state})

    }

    // Submit function
    const formSubmit = async (inputLabels) => {
        if( ! document.querySelector('input[name="title"]').value){
            alert("title can't be empty");
            return;
        }
        const formData = getFormData(inputLabels);
        const jsonProjectData = JSON.stringify(formData.project_data_json);
        const projectToADDSTATE = formData.project_data_to_add_state;
        // console.log(formData.project_data_json, formData.project_data_to_add_state)
        
        try{
            if(isUpdate){
                await updateProject(updateProjects.state.projectUpdateData.id, jsonProjectData)
                
                // UPDATE STATE PROJECT
                dispatch(updateProjectState({
                    ...projectToADDSTATE,
                    id: updateProjects.state.projectUpdateData.id,
                }))
                
            }else{
               let res = await createProject(jsonProjectData) 
                console.log("response while project create\n", res)
                // ADD to STATE 
                // add project to state if res is not null
                if(res.id){dispatch(addProjecState({
                    ...projectToADDSTATE,
                    id:res.id,
                }))}
            }

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
                <h1 className="main-title">
                    Update Projects {updateProjects.state.projectUpdateData.title} 
                    <span className="badge">{updateProjects.state.projectUpdateData.id}</span>
                </h1>
            :   <h1 className="main-title">
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
                    // loadAllOptions={loadAllOptions}
                />
                </div>
                

                {/* submit button */}
                <button className="button" onClick={()=>formSubmit(formLabelData.inputLabels)}>
                    {isUpdate?"save":"add project"}
                </button>

                
                {/* update cancel button */
                    isUpdate &&
                        <button className="  sec-button" onClick={()=> FormReset(formLabelData.inputLabels)}>
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


// import { useState } from "react";
// import { createProject } from "../Data/api";
// // compoenets
// import RenderInput from "../miniCompoenets/RenderInputs";
// import RenderSelectInputs from "../miniCompoenets/RenderSelectInput";



// const ProjectForm = ({formLabelData, loadAllProjects}) => {
//     const [selectedTagsState, setSelectedTagsState] = useState([])
//     const [selectedCategoriesState, setSelectedCategoriesState] = useState([])
//     const [selectedStatusState, setSelectedStatusState] = useState([])
   

//     // get form data and reset states 
//     const getFormData = (inputLabels) => {
//         const project_data_json = {};

//         // normal inputs value add to (json / object)
//         inputLabels.map((input) => {
//             project_data_json[input.text] = document.getElementById(input.text).value;
//             document.getElementById(input.text).value = "";
//         })

//         // selected tags add to json/object
//         const tags = selectedTagsState.length ? selectedTagsState.map((obj) => (obj.id)) : [];
//         project_data_json['tags'] = tags
//         setSelectedTagsState([])

//         // selected categories add to json/object
//         const categories = selectedCategoriesState.length? selectedCategoriesState.map((obj) => (obj.id)) : [];
//         project_data_json['categories'] = categories
//         setSelectedCategoriesState([])

//         // selected status add to json/object
//         const status = selectedStatusState.length? selectedStatusState[0].id : null;
//         project_data_json['status'] = status
//         setSelectedStatusState([])

//         console.log(JSON.stringify(project_data_json))
//         return project_data_json

//     }

//     // Submit function
//     const formSubmit = async (inputLabels) => {
//         if( ! document.querySelector('input[name="title"]').value){
//             alert("title can't be empty");
//             return;
//         }

//         const projectData = getFormData(inputLabels);
//         try{
//             const res = await createProject(JSON.stringify(projectData))
//             console.log("project created successfully!\n", res)
//             await loadAllProjects();
//         }catch(err){
//             console.log(err)
//         }
        
//     }

//     return(
//         <>
//         {
//             formLabelData?
//             // Form Grid
//             <div>
//                 <RenderInput inputLabels={formLabelData.inputLabels}/>
//                 <RenderSelectInputs
//                     selectLabels={formLabelData.selectLabels}
//                     statesInfo={{
//                         tags:{
//                             state: selectedTagsState, 
//                             set: setSelectedTagsState
//                         },
//                         categories:{
//                             state:selectedCategoriesState,
//                             set:setSelectedCategoriesState
//                         },
//                         status:{
//                             state:selectedStatusState,
//                             set:setSelectedStatusState
//                         },
//                     }}
//                 />

//                 {/* submit button */}
//                 <button onClick={()=>formSubmit(formLabelData.inputLabels)}>
//                     add Project
//                 </button>
//             </div>
//             :
//             <p>Can't get form Data from Project_Admin</p>
//         }
        
//         </>
//     )
// }

// export default ProjectForm;
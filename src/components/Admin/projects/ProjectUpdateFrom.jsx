// import ProjectForm from "./ProjectForm";
import Form from "./Form";

const ProjectUpdateForm = ({
    formLabelData,
    updateProjects,
    isUpdate,
    loadAllOptions,

}) => {

    
    return(
        <>
        
        <Form
            formLabelData={formLabelData}
            loadAllOptions={loadAllOptions}
            isUpdate={isUpdate}
            updateProjects={updateProjects}
        />
        </>
    )
}

export default ProjectUpdateForm;
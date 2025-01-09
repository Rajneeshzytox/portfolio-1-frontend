// import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";


// temp import

// import AddProject from "./components/Projects/AddProject";
// import ProjectTable from "./components/Projects/ProjectTable";
// import TempList from "./components/Projects/tempList";
// import TempForm from "./components/Projects/TempForm";
// import SelectInput from "./components/small components/SelectInput";
// import SelectTags from "./components/small components/SelectTags";


// import api.js
import { fetchCategory, fetchTags, fetchStatus } from "./services/api";

// Data 
import { FormLabelData } from "./services/myData";


// ADMIN IMPORT
import ProjectAdmin from "./components/Admin/ProjectAdmin";



function App() {
  const [tags, setTags] = useState([])
  const [category, setCategory] = useState([])
  const [status, setStatus] = useState([])
  
  
  // load Options for the formLabelData
  useEffect(()=> {
    const getOptions = async () =>{
        const getTags = await fetchTags()
        setTags(getTags)

        const getCategory = await fetchCategory()
        setCategory(getCategory)

        const getStatus = await fetchStatus()
        setStatus(getStatus)
    };
    getOptions()
  }, [])

  const formLabelData = FormLabelData(tags, category, status)
  
  
  return (
    <>
    
      {/* <HomePage/> */}
      {/* <AddProject data={formLabelData}/> */}
      {/* <ProjectTable/> */}
      {/* <TempList />
      <TempForm/> */}

      {/* temp */}
      {/* <SelectTags /> */}
      
      <ProjectAdmin />
    
    </>

  );

}

export default App

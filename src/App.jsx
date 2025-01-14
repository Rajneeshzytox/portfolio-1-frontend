// import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Dashboard from "./components/Admin/Dashboard";

// HomePage
import HomePage from "./components/HomePage" 



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
    
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/admin" element={<Dashboard/>}>
           
        </Route>
        
      </Routes>
    
    </>

  );

}

export default App

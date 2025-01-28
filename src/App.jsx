import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
// REDUX SELECTOR & DISPATCH
  import { useDispatch } from "react-redux";

// REDUX LOAD States from Backend 
import { tagsFetch } from "./reduxStates/slices/tagsSlice";
import { projectsFetch } from "./reduxStates/slices/projectsSlice";
import { categoriesFetch } from "./reduxStates/slices/categoriesSlice";
import { statusFetch } from "./reduxStates/slices/statusSlice";
import { fetchFrontendData } from "./reduxStates/slices/frontendData";

// ADMIN IMPORT
import Dashboard from "./components/Admin/Dashboard";
import ProjectAdmin from "./components/Admin/ProjectAdmin";
import Options_Admin from "./components/Admin/Options_Admin";
import Tags from "./components/Admin/options/Tags";
import Categories from "./components/Admin/options/Categories"
import Status from "./components/Admin/options/Status"
// HomePage
import HomePage from "./components/HomePage" 
// Projects
import Projects from "./components/ProjectsPage/Projects";

// DISPATCH 

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const load = () => {
      // LOAD ALL DATA
       dispatch(projectsFetch());
       dispatch(tagsFetch());
       dispatch(categoriesFetch());
       dispatch(statusFetch());
       dispatch(fetchFrontendData());
      console.log("============================== APP LOAD +++++++++++++++++++++")
    }

    load()

  }, [dispatch])
  
 
  
  return (
    <>
    <Routes>
      {/* frontend */}
      <Route path="/" element={<HomePage/>} />
      <Route path="/projects" element={<Projects/>} />

      {/* ADMIN */}
      <Route exact path="admin/" element={<Dashboard/>} >
          <Route path="" element={<p>dashboard ui</p>} />
          <Route path="projects/" element={<ProjectAdmin/>} />
          <Route path="options/" element={<Options_Admin/>} >
            <Route path="" element={<Tags/>} />
            <Route path="tags/" element={<Tags/>} />
            <Route path="categories/" element={<Categories />} />
            <Route path="status/" element={<Status/>} />
          </Route>

      </Route>
    </Routes>
    </>

  );

}

export default App

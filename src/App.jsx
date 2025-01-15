
import React from "react";
import { Routes, Route } from "react-router-dom";




// ADMIN IMPORT
import Dashboard from "./components/Admin/Dashboard";

// HomePage
import HomePage from "./components/HomePage" 



function App() {
  
  
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

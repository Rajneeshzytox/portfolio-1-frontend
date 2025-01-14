import axios from "axios";

const API = axios.create({
    // baseURL: "http://127.0.0.1:8080/api/", // Django backend API local dev
    baseURL: "https://portfoliobackend-qpni.onrender.com", // Django backend deployed
  });

const API_BASE_URL = "https://portfoliobackend-qpni.onrender.com"
// const API_BASE_URL = "http://127.0.0.1:8080/api/"

// get projects
export const fetchProjects = async () => {
  const response = await API.get("projects/");
  return response.data;
};

// post projects {axios method is useless fs}
// add the  headers: {'Content-Type':'application/json'} so it works
export const createProject = async (projectData) => {
  const response = await API.post("projects/", projectData, {
    headers: {'Content-Type':'application/json'}
  });
  return response.data;
};

// fetch post request {love fetch, it works}
export const fetchPOST = async (projectData) => {
    fetch(`${API_BASE_URL}projects/`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: projectData
    }).then(res => res.json()).then(val=>val)
  
};

// delete Projects
export const delProject = async (id) =>{
  try{
    await API.delete(`projects/${id}/`)
    return true
  }catch (err){
    return false
  }
}


// get tags 
export const fetchTags = async () => {
  const response = await API.get("tags/");
  // console.log("from api.js/fetchtags: \n",response.data)
  return response.data;
};
// get category 
export const fetchCategory = async () => {
  const response = await API.get("category/");
  return response.data;
};
// get Statuss 
export const fetchStatus = async () => {
  const response = await API.get("status/");
  return response.data;
};
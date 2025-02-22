import axios from "axios";



export const serverURL = 
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:8080"  // Development URL
    : "https://portfoliobackend-qpni.onrender.com";  // Production URL

// -------------- Base url (backend) ---------------
const API = axios.create({
    baseURL: `${serverURL}/api/`
})

// -------------- Endpoints (url.py) ---------------
const urls = {
    project: 'projects/',
    tags: 'tags/',
    categories: 'category/',
    status: 'status/',
    frontendData: 'resume-data/'
}



// -------------- Projects api ---------------

// get (fetch) load projects
export const loadProjects = async () => {
    try{
        const res = await API.get(urls.project);
        return res.data;
    }catch (err){
        console.log(err);
    }
}

// post create Projects
export const createProject = async (projectData) => {
    try{
        const res = await API.post(
                        urls.project,
                        projectData, 
                        {headers: {'Content-Type':'application/json'} }
                    )
        return res.data
    }
    catch (err){
        
        console.log(err);
    }
}

// delete Projects
export const delProject = async (id) =>{
    try {
        await API.delete(`${urls.project}${id}/`)
    } catch (err) {
        console.log(err)
    }
}

// update project
export const updateProject = async (id, projectData) => {
    try {
        await API.put(
            `${urls.project}${id}/`, 
            projectData, 
            {headers: {'Content-Type':'application/json'} },
        )
    } catch (err) {
        console.log(err)
    }
}



// -------------- Tags api ---------------

// get (fetch) load Tags
export const loadTags = async () => {
    try{
        const res = await API.get(urls.tags);
        return res.data;
    }catch (err){
        console.log(err);
    }
}

export const createTag = async (tagData) => {
    try{
        const res = await API.post(urls.tags, tagData, {headers: {'Content-Type':'application/json'}});
        return res.data;
    }
    catch (err){
        console.log(err);
    }
}

export const delTag = async (id) =>{
    try {
        const res = await API.delete(`${urls.tags}${id}/`);
        if( res.status == 204){
            return id;
        }
    } catch (err) {
        console.log(err)
    }
}

// update project
export const updateTag = async (id, tagData) => {
    try {
        const res = await API.put(
            `${urls.tags}${id}/`, 
            tagData, 
            {headers: {'Content-Type':'application/json'} },
        )
        return res.data;
    } catch (err) {
        console.log(err)
    }
}



// -------------- Categories api ---------------

// get (fetch) load Categories
export const loadCategories = async () => {
    try{
        const res = await API.get(urls.categories);
        return res.data;
    }catch (err){
        console.log(err);
    }
}

export const createCategories = async (categoryData) => {
    try{
        const res = await API.post(urls.categories, categoryData, {headers: {'Content-Type':'application/json'}});
        return res.data;
    }catch(err){
        console.log("categories create failed\n", err)
    }
}

export const delCategories = async (id) =>{
    try {
        const res = await API.delete(`${urls.categories}${id}/`);
        if( res.status == 204){
            return id;
        }
    } catch (err) {
        console.log(err)
    }
}

// update project
export const updateCategories = async (id, categoriesData) => {
    try {
        const res = await API.put(
            `${urls.categories}${id}/`, 
            categoriesData, 
            {headers: {'Content-Type':'application/json'} },
        )
        return res.data;
    } catch (err) {
        console.log(err)
    }
}



// -------------- Status api ---------------

// get (fetch) load Status
export const loadStatus = async () => {
    try{
        const res = await API.get(urls.status);
        return res.data;
    }catch (err){
        console.log(err);
    }
}

export const createStatus = async (statusData) => {
    try{
        const res = await API.post(urls.status, statusData, {headers: {'Content-Type':'application/json'}})
        return res.data;
    }catch (err){
        console.log("status create failed\n",err);
    }
}

export const delStatus = async (id) =>{
    try {
        const res = await API.delete(`${urls.status}${id}/`)
        if( res.status == 204){
            console.log("deleted, ", id)
            return id;
        }
    } catch (err) {
        console.log(err)
    }
}

// update status
export const updateStatus = async (id, statusData) => {
    try {
        const res = await API.put(
            `${urls.status}${id}/`, 
            statusData, 
            {headers: {'Content-Type':'application/json'} },
        )
        return res.data;
    } catch (err) {
        console.log(err)
    }
}



// ---------------- 
// frontendData
// ---------------- 

export const loadFrontendData = async () => {
    const res = await API.get(urls.frontendData);
    return res.data
}
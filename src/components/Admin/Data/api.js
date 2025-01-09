import axios from "axios";


// -------------- Base url (backend) ---------------
const API = axios.create({
    baseURL: "https://portfoliobackend-qpni.onrender.com/api/"
})

// -------------- Endpoints (url.py) ---------------
const urls = {
    project: 'projects/',
    tags: 'tags/',
    categories: 'category/',
    status: 'status/',

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


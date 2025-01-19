import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// import load projects
import { loadProjects } from "../../components/Admin/Data/api";

// fetch projects & set to the state 
export const projectsFetch = createAsyncThunk('projectsFetch', async ()=>{
    return await loadProjects();
});


// initail state
const initialState = {
    data: [],
    isLoading: false,
    error: false,
} 

const ProjectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProjecState: (state, action) => {
            return {...state, data:[...state.data, action.payload]}
        },
        updateProjectState: (state, action) => {
            console.log(action.payload)
            return {...state, data:state.data.map((object)=>(
                object.id == action.payload.id? action.payload : object
            )
            )}
        },
        deleteProjectState: (state, action) => {
            return {...state, data: state.data.filter((object) => object.id !== action.payload.id)}
        },
    },

    // set fetched data to state
    extraReducers: (builder) => {
        builder.addCase(projectsFetch.fulfilled, (state, action)=>{
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false,
            }
        })
        builder.addCase(projectsFetch.pending, (state, action)=>{
            return {
                ...state,
                isLoading: true,
            }
        })
        builder.addCase(projectsFetch.rejected, (state, action)=>{
            console.log("proejects loading failed, \n", action.payload)
            return {
                ...state,
                error:true,
                isLoading:false,
            }
        })
    }

    
});

export const {addProjecState, updateProjectState, deleteProjectState} = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
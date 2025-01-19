import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// import loadTags
import { loadTags } from "../../components/Admin/Data/api";

// fetch tags & set to the state 
export const tagsFetch = createAsyncThunk('tagsFetch', async ()=>{
    return await loadTags();
});


// initail state
const initialState = {
    data: [],
    isLoading: false,
    error: false,
} 

const TagsSlice = createSlice({
    name: "Tags",
    initialState,
    reducers: {
        addTagState: (state, action) => {
            return {...state, data:[...state.data, action.payload]}
        },
        updateTagState: (state, action) => {
            return {...state, data:state.data.map((object)=>(
                object.id == action.payload.id? action.payload : object
            ))}
        },
        deleteTagState: (state, action) => {
            return {...state, data: state.data.filter((object) => object.id !== action.payload.id)}
        },

    },

    // set fetched data to state
    extraReducers: (builder) => {
        builder.addCase(tagsFetch.fulfilled, (state, action)=>{
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false,
            }
        })
        builder.addCase(tagsFetch.pending, (state, action)=>{
            return {
                ...state,
                isLoading: true,
            }
        })
        builder.addCase(tagsFetch.rejected, (state, action)=>{
            console.log("tagas loading failed, \n", action.payload)
            return {
                ...state,
                error:true,
                isLoading:false,
            }
        })
    }

    
});

export const {addTagState, updateTagState, deleteTagState} = TagsSlice.actions;

export default TagsSlice.reducer;
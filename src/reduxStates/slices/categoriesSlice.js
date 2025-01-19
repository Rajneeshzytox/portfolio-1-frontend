import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// import loadCategories
import { loadCategories } from "../../components/Admin/Data/api";

// fetch categories & set to the state 
export const categoriesFetch = createAsyncThunk('categoriesFetch', async ()=>{
    return await loadCategories();
});


// initail state
const initialState = {
    data: [],
    isLoading: false,
    error: false,
} 

const CategoriesSlice = createSlice({
    name: "Categories",
    initialState,
    reducers: {
        addCategoriesState: (state, action) => {
            return {...state, data:[...state.data, action.payload]}
        },
        updateCategoriesState: (state, action) => {
            console.log("update payload: ", action.payload)
            return {...state, data:state.data.map((object)=>(
                object.id == action.payload.id? action.payload : object
            ))}
        },
        deleteCategoriesState: (state, action) => {
            return {...state, data: state.data.filter((object) => object.id !== action.payload.id)}
        },
    },

    // set fetched data to state
    extraReducers: (builder) => {
        builder.addCase(categoriesFetch.fulfilled, (state, action)=>{
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false,
            }
        })
        builder.addCase(categoriesFetch.pending, (state, action)=>{
            return {
                ...state,
                isLoading: true,
            }
        })
        builder.addCase(categoriesFetch.rejected, (state, action)=>{
            console.log("categories loading failed, \n", action.payload);
            return {
                ...state,
                error:true,
                isLoading:false,
            }
        })
    }

    
});

export const {addCategoriesState, updateCategoriesState, deleteCategoriesState} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
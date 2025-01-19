import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// import Status
import { loadStatus } from "../../components/Admin/Data/api";

// fetch Status & set to the state 
export const statusFetch = createAsyncThunk('StatusFetch', async ()=>{
    return await loadStatus();
});


// initail state
const initialState = {
    data: [],
    isLoading: false,
    error: false,
} 

const StatusSlice = createSlice({
    name: "Status",
    initialState,
    reducers: {
        addStatusState: (state, action) => {
            return {...state, data:[...state.data, action.payload]}
        },
        updateStatusState: (state, action) => {
            return {...state, data:state.data.map((object)=>(
                object.id == action.payload.id? action.payload : object
            )
            )}
        },
        deleteStatusState: (state, action) => {
            return {...state, data: state.data.filter((object) => object.id !== action.payload.id)}
        },
    },

    // set fetched data to state
    extraReducers: (builder) => {
        builder.addCase(statusFetch.fulfilled, (state, action)=>{
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false,
            }
        })
        builder.addCase(statusFetch.pending, (state, action)=>{
            return {
                ...state,
                isLoading: true,
            }
        })
        builder.addCase(statusFetch.rejected, (state, action)=>{
            console.log("status loading failed, \n", action.payload)
            return {
                ...state,
                error:true,
                isLoading:false,
            }
        })
    }

    
});

export const {addStatusState, updateStatusState, deleteStatusState} = StatusSlice.actions;
export default StatusSlice.reducer;
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { loadFrontendData } from "../../components/Admin/Data/api";


export const fetchFrontendData = createAsyncThunk('fetch Frontend Data', async()=>{
    return await loadFrontendData();
})


const initialState = {
    data: [],
    isLoading: false,
    error: false,
} 

const FrontendSlice = createSlice({
    name: "Frontend",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
            builder.addCase(fetchFrontendData.fulfilled, (state, action)=>{
                return {
                    ...state,
                    data: action.payload,
                    isLoading: false,
                    error: false,
                }
            })
            builder.addCase(fetchFrontendData.pending, (state, action)=>{
                return {
                    ...state,
                    isLoading: true,
                    error:false,
                }
            })
            builder.addCase(fetchFrontendData.rejected, (state, action)=>{
                console.log("data frotend loading failed, \n", action.payload)
                return {
                    ...state,
                    error:true,
                    isLoading:false,
                }
            })
        }

});


export default FrontendSlice.reducer;
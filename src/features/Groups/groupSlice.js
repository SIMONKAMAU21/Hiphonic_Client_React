import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



const initialState = { groups: [], status: 'idle', error: null }; 

const GROUPS_API =`http://localhost:3000/api/group`

export const getGroups=createAsyncThunk('groups/getGroups',async()=>{
    try {
        const response=await axios.get(GROUPS_API)
        console.log("response from the group api",response)
        return response.data
    
        
    } catch (error) {
        return error.message
    }
   
})




export const groupSlice=createSlice({
    name:'groups',
    initialState,
    reducers:{},
    extraReducers(builders){
        builders
            .addCase(getGroups.pending,(state,action)=>{
                state.status='loading'
            })
            .addCase(getGroups.fulfilled,(state,action)=>{
                state.status='succeeded'
                state.groups=action.payload
            })
            .addCase(getGroups.rejected,(state,action)=>{
                state.status='failed'
                state.error=action.error.message
            })
            
    }
})


export const selectAllGroups=state=>state.groups.groups
export const getGroupsStatus=state=>state.groups.status
export const getGroupsError=state=>state.groups.error

export default  groupSlice.reducer
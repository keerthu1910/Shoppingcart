import {createSlice} from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    loading:false,
    users:[],
    items:[],
    error:''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers',async()=>{
    return axios.get('https://fakestoreapi.com/products')
        .then(response=>response.data)
        
})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            state.items.push(action.payload)
        }
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending,state=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users = action.payload.map(obj=>({...obj,qty:1}))
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error.message
        })
    }
})


export default userSlice.reducer
export const {addtocart} = userSlice.actions
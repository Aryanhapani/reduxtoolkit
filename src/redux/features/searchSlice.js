import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react'


const searchSlice=createSlice({
    name:"search",
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loading:false,
        error:null,
    },
    reducers:{
        setQuery(state,action){
            state.query=action.payload

        },
        setActivetabs(state,action){
            state.activeTab=action.payload

        },
        
        setResults(state,action){
            state.results=action.payload
            state.loading=false

        },
        setloading(state,action){
            state.loading=action.payload
            state.error=null
        },
        setError(state,action){
            state.error=action.payload
            state.loading=false
        },
        clearResults(state){
          state.results = []
        }
    }
})

export const {setQuery,setActivetabs,setError,setloading,setResults,clearResults} = searchSlice.actions

export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    run:false
}


export const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        start: (state)=>{
            state.run = true
        },
        stop: (state) =>{
            state.run = false
        },
        toggle: (state) =>{
            state.run = !state.run
        }
    }
})

export const {start, stop, toggle} = uiSlice.actions;

export const selectRun = (state) => state.ui.run;

export default uiSlice.reducer;
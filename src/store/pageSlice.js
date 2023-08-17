import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        addCat(state, action) {
            state.push(action.payload)
        }
    }
});
export const {addCat} = pageSlice.actions
export default pageSlice.reducer;
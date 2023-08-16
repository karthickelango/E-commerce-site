import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const descriptionSlice = createSlice({
    name: 'descriptionpage',
    initialState,
    reducers: {
        addDescription(state, action) {
            state.push(action.payload)
        }
    }
});
export const {addDescription} = descriptionSlice.actions
export default descriptionSlice.reducer;
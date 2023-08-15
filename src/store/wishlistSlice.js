import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWishlist(state, action) {
            state.push(action.payload)
        },
        removeWishlist(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
});
export const {addWishlist, removeWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer;
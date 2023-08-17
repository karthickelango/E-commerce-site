import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import descriptionSlice from "./descriptionSlice";
import pageSlice from "./pageSlice";

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({ 
    cart: cartSlice,
    wishlist: wishlistSlice,
    descriptionpage: descriptionSlice,
    page: pageSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)


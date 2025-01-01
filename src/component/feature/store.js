// import { configureStore } from '@reduxjs/toolkit'
// import { persistedReducer } from './TaskSlice'
// import persistStore from 'redux-persist/es/persistStore'
// export const store = configureStore({
//   reducer: persistedReducer
// })

import { configureStore } from "@reduxjs/toolkit";

import productReducer from './TaskSlice'

// export const persistor = persistStore(store)
export const store = configureStore({
  reducer: productReducer
})
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import ecomReducer from './ecomSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,PERSIST,
    PURGE,REGISTER
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : "root",
    version:1,
    storage,
}

const persistedReducer = persistReducer(persistConfig,ecomReducer)
export const store=configureStore({
    reducer:{
        ecom:persistedReducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        }
    })
});

export let persistor = persistStore(store);
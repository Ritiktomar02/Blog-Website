import { configureStore } from "@reduxjs/toolkit";
import { apislice} from './slices/apislice'

export const store=configureStore({
    reducer:{
        api:apislice.reducer
    }
})
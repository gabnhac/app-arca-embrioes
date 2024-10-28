import { configureStore } from '@reduxjs/toolkit'
import animalSlice from './animal/animalSlice';

export const store =  configureStore({
  reducer: {
    animal: animalSlice,
    
  }
})

export type RootState = ReturnType<typeof store.getState>;
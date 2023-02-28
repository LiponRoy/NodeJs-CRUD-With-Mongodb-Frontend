import { configureStore } from '@reduxjs/toolkit';
import InstructorSlice from '../feature/InstructorSlice';

export const store = configureStore({
	reducer: {
		InstructorReducer: InstructorSlice,
	},
});

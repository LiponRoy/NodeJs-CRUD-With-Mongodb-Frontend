import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	dataAll: [],
	singleData: {},
	isError: false,
	isLoading: false,
	message: '',
};

// Create new Data
export const AddData = createAsyncThunk('instructor/AddData', async (values, thunkAPI) => {
	try {
		const response = await axios.post('/data/add', values);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Get user Data
export const getData = createAsyncThunk('instructor/getData', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/data/all');
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Get user one Data
export const getOneData = createAsyncThunk('instructor/getOneData', async (id, thunkAPI) => {
	try {
		const response = await axios.get('/data/getOne/' + id);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});
// Delete user Data
export const deleteData = createAsyncThunk('instructor/deleteData', async (id, thunkAPI) => {
	try {
		const response = await axios.delete('/data/delete/' + id);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const productSlice = createSlice({
	name: 'instructor',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(AddData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(AddData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.dataAll.push(action.payload);
			})
			.addCase(AddData.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.dataAll = action.payload;
			})
			.addCase(getData.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getOneData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOneData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.singleData = action.payload;
			})
			.addCase(getOneData.rejected, (state, action) => {
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(deleteData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteData.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(deleteData.rejected, (state, action) => {
				state.isLoading = false;
				state.message = action.payload;
			});
	},
});

export default productSlice.reducer;

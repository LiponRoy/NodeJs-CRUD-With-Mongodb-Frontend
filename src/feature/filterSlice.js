import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filteredProducts: [],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		FILTER_BY_SEARCH(state, action) {
			const { dataAll, search } = action.payload;
			const tempProducts = dataAll?.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

			state.filteredProducts = tempProducts;
		},
	},
});

export const { FILTER_BY_SEARCH } = filterSlice.actions;

export default filterSlice.reducer;

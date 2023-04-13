import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getData = createApi({
	reducerPath: 'getData',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://nodejs-crud-with-mongodb-api.onrender.com' }),
	tagTypes: ['myData'],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => '/data/all',
			transformResponse: (res) => res.reverse(),
			providesTags: ['myData'],
			//transformResponse: (response) => response.sort((a, b) => b.id - a.id),
		}),
	}),
});

export const { useGetTasksQuery } = getData;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const instructorsApi = createApi({
	reducerPath: 'instructorsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://nodejs-crud-with-mongodb-api.onrender.com',
	}),
	tagTypes: ['Instructor'],
	endpoints: (builder) => ({
		getInstructors: builder.query({
			query: () => '/data/all',
			transformResponse: (res) => res.reverse(),
			providesTags: ['Instructor'],
		}),
		addInstructor: builder.mutation({
			query: (instructor) => ({
				url: '/data/add',
				method: 'POST',
				body: instructor,
			}),
			invalidatesTags: ['Instructor'],
		}),
		updateInstructor: builder.mutation({
			query: ({ _id, ...instructor }) => ({
				url: `/data/update/${_id}`,
				method: 'PUT',
				body: instructor,
			}),
			invalidatesTags: ['Instructor'],
		}),
		deleteInstructor: builder.mutation({
			query: (_id) => ({
				url: `/data/delete/${_id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Instructor'],
		}),
		getInstructorById: builder.query({
			query: (_id) => `/data/getOne/${_id}`,
			invalidatesTags: ['Instructor'],
		}),
	}),
});

export const { useGetInstructorsQuery, useAddInstructorMutation, useUpdateInstructorMutation, useDeleteInstructorMutation, useGetInstructorByIdQuery } = instructorsApi;

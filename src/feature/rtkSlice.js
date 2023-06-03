import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
	reducerPath: 'studentsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://nodejs-crud-with-mongodb-api.onrender.com',
	}),
	tagTypes: ['Student'],
	endpoints: (builder) => ({
		getStudents: builder.query({
			query: () => '/data/all',
			transformResponse: (res) => res.reverse(),
			providesTags: ['Student'],
		}),
		addStudent: builder.mutation({
			query: (student) => ({
				url: '/data/add',
				method: 'POST',
				body: student,
			}),
			invalidatesTags: ['Student'],
		}),
		updateStudent: builder.mutation({
			query: ({ _id, ...student }) => ({
				url: `/data/update/${_id}`,
				method: 'PUT',
				body: student,
			}),
			invalidatesTags: ['Student'],
		}),
		deleteStudent: builder.mutation({
			query: (_id) => ({
				url: `/data/delete/${_id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Student'],
		}),
		getStudentById: builder.query({
			query: (_id) => `/data/getOne/${_id}`,
			invalidatesTags: ['Student'],
		}),
	}),
});

export const { useGetStudentsQuery, useAddStudentMutation, useUpdateStudentMutation, useDeleteStudentMutation, useGetStudentByIdQuery } = studentsApi;

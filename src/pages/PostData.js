import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../feature/InstructorSlice';
// yup schema
const schema = yup
	.object({
		name: yup
			.string()
			.matches(/^[A-Za-z ]*$/, 'Please enter valid name')
			.max(40)
			.min(3)
			.required('Name is required'),
		email: yup.string().email('Invalid email format').required('Mail is required'),
		phone: yup.number().required('Phone is required'),
		address: yup.string().required('Address is required'),
		status: yup.string().required('Startus is required'),
	})
	.required();
//End yup schema

const PostData = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, message } = useSelector((state) => state.InstructorReducer);
	// yup schema and hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// End yup schema and hook form

	function goHome() {
		navigate('/');
	}
	const onSubmit = (data) => {
		console.log(data);
		dispatch(AddData(data));
		setTimeout(goHome, 4000);
	};
	return (
		<>
			<div className='h-screen w-full fm'>
				<div className=' m-4'>
					<h1 className='font-bold'>POST DATA </h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input className={inputDesign} placeholder='Full Name' type='text' {...register('name')} />
						<p className='errMessage'>{errors.name?.message}</p>

						<input className={inputDesign} placeholder='Email' type='text' {...register('email')} />
						<p className='errMessage'>{errors.email?.message}</p>
						<input className={inputDesign} placeholder='Phone' type='number' {...register('phone')} />
						<p className='errMessage'>{errors.phone?.message}</p>
						<input className={inputDesign} placeholder='Address' type='text' {...register('address')} />
						<p className='errMessage'>{errors.address?.message}</p>
						<input className={inputDesign} placeholder='Status' type='text' {...register('status')} />
						<p className='errMessage'>{errors.status?.message}</p>
						{isLoading ? <span>Posting...</span> : <input className='myBtn-Outline' type='submit' />}
					</form>
				</div>
			</div>
		</>
	);
};
const inputDesign = 'w-[250px] md:w-[350px] p-2 my-1 rounded-md border-2 border-primary';

export default PostData;

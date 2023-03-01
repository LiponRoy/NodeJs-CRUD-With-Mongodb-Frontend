import React, { useState } from 'react';
import { deleteData } from '../../feature/InstructorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
const DeleteConfirm = () => {
	const { isLoading, isError, message } = useSelector((state) => state.InstructorReducer);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();

	function goHome() {
		navigate('/');
	}
	const handleDelete = (myid) => {
		dispatch(deleteData(myid));
		setTimeout(goHome, 4000);
	};

	return (
		<div className='  '>
			<div className='fcm h-screen w-full bg-slate-600  text-white'>
				<span className=' text-4xl my-4 '>Would you like to delete it?</span>
				{isLoading ? (
					<span className=' mt-2'>Deleting...</span>
				) : (
					<div className='fcm gap-4'>
						<Button disabled={isLoading} variant='contained' color='error' onClick={() => handleDelete(id)} className=' w-40 h-14 fm'>
							Delete !
						</Button>
						<a onClick={() => navigate('/')} className='  cursor-pointer mt-2 p-2 text-[12px] border-2 border-gray-300'>
							GO BACK
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default DeleteConfirm;

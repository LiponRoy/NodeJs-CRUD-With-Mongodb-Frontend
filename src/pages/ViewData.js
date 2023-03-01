import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneData } from '../feature/InstructorSlice';
import { FaUserAlt, FaRegEnvelope, FaGlobe } from 'react-icons/fa';
import { Button } from '@mui/material';

const ViewData = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { singleData, isLoading, isError, message } = useSelector((state) => state.InstructorReducer);
	useEffect(() => {
		if (isError) {
			console.log(isError);
		}
		if (singleData) {
			dispatch(getOneData(id));
		}
	}, [isError, message, dispatch]);

	return (
		<div className=' h-screen w-full fm'>
			{isLoading ? (
				<span>Loading...</span>
			) : (
				<div className=' bg-gray-200 shadow-md text-gray-700  p-5 my-5 flex flex-col justify-start rounded-md gap-1'>
					<FaUserAlt className=' mb-2' size={64}></FaUserAlt>
					<span className=' text-4xl font-bold'>{singleData.name}</span>
					<span className=' text-xl font-bold'>{singleData.email}</span>
					<span className=' text-xl font-bold'>{singleData.address}</span>
					<span className=' text-xl font-bold'>{singleData.status}</span>
					<Button onClick={() => navigate('/')} className='  cursor-pointer mt-2 text-[12px]'>
						GO BACK
					</Button>
				</div>
			)}
		</div>
	);
};

export default ViewData;

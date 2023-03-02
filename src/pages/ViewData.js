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
				<div className=''>
					<div className='fm bg-gray-200 shadow-md text-gray-700  p-10 my-5 rounded-md'>
						<div className=' mr-4'>
							<FaUserAlt size={94}></FaUserAlt>
						</div>
						<div className='flex flex-col justify-start gap-2'>
							<span className=' text-4xl font-bold'>Name : {singleData?.name}</span>
							<span className=' text-2xl font-bold'>Email : {singleData?.email}</span>
							<span className=' text-2xl font-bold'>Address : {singleData?.address}</span>
							<span className=' text-2xl font-bold'>Status : {singleData?.status}</span>
						</div>
					</div>
					<a onClick={() => navigate('/')} className='  cursor-pointer mt-2 p-2 text-[12px] border-2 border-gray-300'>
						GO BACK
					</a>
				</div>
			)}
		</div>
	);
};

export default ViewData;

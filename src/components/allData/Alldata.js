import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import Axios from 'axios';
import Data from './Data';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../feature/InstructorSlice';

const Alldata = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { dataAll, isLoading, isError, message } = useSelector((state) => state.InstructorReducer);

	useEffect(() => {
		if (isError) {
			console.log(isError);
		}
		if (dataAll) {
			dispatch(getData());
		}
	}, [isError, message, dispatch]);

	const dataAdd = () => {
		navigate('/postData/ADD');
	};

	return (
		<div className='mx-10'>
			{isLoading ? (
				<div className=' h-[80vh] w-full fm'>
					<CircularProgress color='inherit' />
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{dataAll && dataAll?.map((data) => <Data key={data._id} id={data._id} name={data.name} email={data.email} phone={data.phone} address={data.address} status={data.status}></Data>)}
				</div>
			)}
		</div>
	);
};

export default Alldata;

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
	console.log(dataAll);
	useEffect(() => {
		if (isError) {
			console.log(isError);
		}
		if (dataAll) {
			dispatch(getData());
		}
	}, [isError, message, dispatch, Data]);

	const dataAdd = () => {
		navigate('/postData');
	};

	return (
		<div className=' m-14'>
			<button onClick={() => dataAdd()}>Add Data</button>
			<span className=' text-2xl'>Instractor data</span>
			{isLoading ? (
				<div className=' h-[80vh] w-full fm'>
					<CircularProgress color='inherit' />
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{dataAll ? dataAll.map((data) => <Data id={data._id} name={data.name} email={data.email} address={data.address} status={data.status}></Data>) : <span> no data found</span>}
				</div>
			)}
		</div>
	);
};

export default Alldata;

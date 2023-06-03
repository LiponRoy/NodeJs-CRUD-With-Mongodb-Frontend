import React from 'react';
import { CircularProgress } from '@mui/material';
import Data from './Data';
import { useGetStudentsQuery } from '../../feature/rtkSlice';

const Alldata = () => {
	const { data: dataAll, isFetching } = useGetStudentsQuery();

	return (
		<div className='mx-10'>
			{isFetching ? (
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

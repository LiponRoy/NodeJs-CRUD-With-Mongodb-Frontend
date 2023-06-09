import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Data from './Data';
import { useGetInstructorsQuery } from '../../feature/instructorsApi';

import { FILTER_BY_SEARCH } from '../../feature/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';

const Alldata = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const { data: dataAll, isFetching } = useGetInstructorsQuery();
	const { filteredProducts } = useSelector((state) => state.filterS);

	useEffect(() => {
		dispatch(FILTER_BY_SEARCH({ dataAll, search }));
	}, [dispatch, dataAll, search]);

	return (
		<div className='mx-10'>
			<Search value={search} onChange={(e) => setSearch(e.target.value)} />

			{isFetching ? (
				<div className=' h-[80vh] w-full fm'>
					<CircularProgress color='inherit' />
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 placeholder:backdrop:px-4'>
					{filteredProducts &&
						filteredProducts?.map((data) => <Data key={data._id} id={data._id} name={data.name} email={data.email} phone={data.phone} address={data.address} status={data.status}></Data>)}
				</div>
			)}
		</div>
	);
};

export default Alldata;

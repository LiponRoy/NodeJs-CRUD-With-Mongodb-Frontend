import React from 'react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import Axios from 'axios';
import Data from './Data';
import { useNavigate } from 'react-router-dom';

const Alldata = () => {
	const navigate = useNavigate();
	// const baseURL = '/data/all';
	const [post, setPost] = React.useState([]);
	useEffect(() => {
		Axios.get('/data/all').then((response) => {
			setPost(response.data);
		});
	}, []);

	const dataAdd = () => {
		navigate('/postData');
	};

	return (
		<div className=' m-14'>
			<button onClick={() => dataAdd()}>Add Data</button>
			<span className=' text-2xl'>Instractor data</span>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				{post ? post.map((data) => <Data id={data._id} name={data.name} email={data.email} address={data.address} status={data.status}></Data>) : <span> no data found</span>}
			</div>
		</div>
	);
};

export default Alldata;

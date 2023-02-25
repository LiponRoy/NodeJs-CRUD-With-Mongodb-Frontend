import React from 'react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import Axios from 'axios';
const Alldata = () => {
	// const baseURL = '/data/all';
	const [post, setPost] = React.useState([]);
	useEffect(() => {
		Axios.get('/data/all').then((response) => {
			setPost(response.data);
		});
	}, []);
	return (
		<div className=' m-14'>
			<span className=' text-2xl'>Instractor data</span>
			{post ? (
				post.map((data) => (
					<div key={data._id} className=' bg-slate-300 p-5 my-5 flex flex-col'>
						<span>{data.name}</span>
						<span>{data.email}</span>
						<span>{data.address}</span>
						<span>{data.status}</span>
					</div>
				))
			) : (
				<span> no data found</span>
			)}
		</div>
	);
};

export default Alldata;

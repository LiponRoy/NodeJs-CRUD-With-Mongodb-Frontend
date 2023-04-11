import { Button } from '@mui/material';
import React from 'react';
import { FaUserAlt, FaRegEnvelope, FaGlobe } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteData } from '../../feature/InstructorSlice';
import Notiflix from 'notiflix';

const Data = ({ id, name, email, address, status }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleDelete = (myId) => {
		dispatch(deleteData(myId));
	};

	// for confirm dialogue
	const confirmDelete = (id) => {
		Notiflix.Confirm.show(
			'Delete this item',
			'Do you delete it ?',
			'Delete',
			'NO',
			function okCb() {
				handleDelete(id);
				setTimeout(() => {
					window.location.reload();
				}, 500);
			},
			function cancelCb() {},
			{
				width: '320px',
				borderRadius: '8px',
				// etc...
			},
		);
	};

	return (
		<div>
			<div className=' bg-gray-200 shadow-md text-gray-700  p-5 my-5 flex flex-col rounded-md gap-1'>
				<FaUserAlt className=' mb-2' size={32}></FaUserAlt>
				<span className=' text-2xl font-bold underline'>{name}</span>
				<div className='flex items-center'>
					<FaRegEnvelope className='mr-2' size={18}></FaRegEnvelope>
					<span className=' text-xl '>{email}</span>
				</div>
				<div className='flex items-center'>
					<FaGlobe className='mr-2' size={18}></FaGlobe>
					<span className=' text-xl '>{address}</span>
				</div>
				<div className='flex items-center'>
					<FaRegEnvelope className='mr-2' size={18}></FaRegEnvelope>
					<span className=' text-xl '>{status}</span>
				</div>

				<div className=' flex items-center justify-between mt-2'>
					<Button onClick={() => confirmDelete(id)} className='myBtn' href=''>
						DELETE
					</Button>
					<Button onClick={() => navigate(`/viewData/${id}`)} className='myBtn' href=''>
						View
					</Button>
					<Button onClick={() => navigate(`/updateData/${id}`)} className='myBtn' href=''>
						UPDATE
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Data;

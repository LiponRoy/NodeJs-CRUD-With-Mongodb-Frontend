import { Button } from '@mui/material';
import React from 'react';
import { FaUserAlt, FaRegEnvelope, FaGlobe, FaPhone, FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useDeleteStudentMutation } from '../../feature/rtkSlice';

const Data = ({ id, name, email, phone, address, status }) => {
	const navigate = useNavigate();
	// RTK
	const [deleteStudent, { isLoading, isSuccess }] = useDeleteStudentMutation();

	const handleDelete = async (myId) => {
		await deleteStudent(myId);
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
				// setTimeout(() => {
				// 	window.location.reload();
				// }, 3000);
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
			<div className=' bg-gray-700 hover:bg-gray-900 text-white shadow-md text-gray-700  p-5 my-5 flex flex-col rounded-md gap-1 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;'>
				<FaUserAlt className=' mb-2' size={32}></FaUserAlt>
				<span className=' text-2xl bg-yellow-600 p-1 rounded-md'>{name}</span>
				<div className='flex items-center'>
					<FaRegEnvelope className='mr-2' size={18}></FaRegEnvelope>
					<span className=' text-xl '>{email}</span>
				</div>
				<div className='flex items-center'>
					<FaPhone className='mr-2' size={18}></FaPhone>
					<span className=' text-xl '>{phone}</span>
				</div>
				<div className='flex items-center'>
					<FaGlobe className='mr-2' size={18}></FaGlobe>
					<span className=' text-xl '>{address}</span>
				</div>
				<div className='flex items-center'>
					<FaAngleDoubleRight className='mr-2' size={18}></FaAngleDoubleRight>
					<span className=' text-xl '>{status}</span>
				</div>

				<div className=' flex items-center justify-between mt-2'>
					<Button variant='outlined' onClick={() => navigate(`/viewData/${id}`)} className='myBtn' sx={{ color: 'white', border: '1px solid white ', margin: '2px' }}>
						View
					</Button>
					<Button variant='outlined' onClick={() => navigate(`/postData/${id}`)} className='myBtn' sx={{ color: 'white', border: '1px solid white ', margin: '2px' }}>
						UPDATE
					</Button>
					<Button variant='outlined' onClick={() => confirmDelete(id)} className=' font-bold' sx={{ color: 'white', border: '1px solid red ', margin: '2px' }}>
						DELETE
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Data;

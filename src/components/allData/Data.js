import React from 'react';
import { FaUserAlt, FaRegEnvelope, FaGlobe } from 'react-icons/fa';

const Data = ({ id, name, email, address, status }) => {
	return (
		<div>
			<div key={id} className=' bg-primary text-white p-5 my-5 flex flex-col rounded-md gap-1'>
				<FaUserAlt className=' mb-2' size={32}></FaUserAlt>
				<span className=' text-2xl font-bold underline'>{name}</span>
				<div className='flex items-center'>
					<FaRegEnvelope className='mr-2' size={18}></FaRegEnvelope>
					<span>{email}</span>
				</div>
				<div className='flex items-center'>
					<FaGlobe className='mr-2' size={18}></FaGlobe>
					<span>{address}</span>
				</div>
				<div className='flex items-center'>
					<FaRegEnvelope className='mr-2' size={18}></FaRegEnvelope>
					<span>{status}</span>
				</div>

				<div className=' flex items-center justify-between mt-2'>
					<buton className='myBtn' href=''>
						DELETE
					</buton>
					<button className='myBtn' href=''>
						UPDATE
					</button>
				</div>
			</div>
		</div>
	);
};

export default Data;

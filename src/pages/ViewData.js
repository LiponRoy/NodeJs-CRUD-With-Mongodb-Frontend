import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaUserAlt, FaRegEnvelope, FaGlobe } from 'react-icons/fa';
import { useGetStudentByIdQuery } from '../feature/rtkSlice';

const ViewData = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	// RTK
	const { data: singleData, isFetching } = useGetStudentByIdQuery(id);

	return (
		<div className=' h-screen w-full fm'>
			{isFetching ? (
				<span>Loading...</span>
			) : (
				<div className=''>
					<div className='fm bg-gray-200 shadow-md text-gray-700  p-10 my-5 rounded-md'>
						<div className=' mr-4'>
							<FaUserAlt size={94}></FaUserAlt>
						</div>
						<div className='flex flex-col justify-start gap-2'>
							<span className=' text-2xl md:text-6xl font-bold'>Name : {singleData?.name}</span>
							<span className=' text-xl md:text-4xl font-bold'>Email : {singleData?.email}</span>
							<span className=' text-xl md:text-4xl font-bold'>Address : {singleData?.address}</span>
							<span className=' text-xl md:text-4xl font-bold'>Status : {singleData?.status}</span>
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

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddStudentMutation, useGetStudentsQuery, useUpdateStudentMutation } from '../feature/rtkSlice';

const initialState = {
	name: '',
	email: '',
	phone: '',
	address: '',
	status: '',
};

const InsertData = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// RTK all
	const { data: dataAll } = useGetStudentsQuery();
	const [addStudent, { isLoading: addLoading, isSuccess }] = useAddStudentMutation();
	const [updateStudent, { isLoading: updateLoading, isSuccess: updateSuccess }] = useUpdateStudentMutation();

	const singleProduct = dataAll.find((item) => item._id === id);

	const [product, setProduct] = useState(() => {
		const newState = detectForm(id, { ...initialState }, singleProduct);
		return newState;
	});

	function detectForm(id, f1, f2) {
		if (id === 'ADD') {
			return f1;
		}
		return f2;
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
		// console.log(product);
	};

	const PostingData = async (e) => {
		e.preventDefault();
		await addStudent(product);
		navigate('/');
	};

	const EditData = async (e) => {
		e.preventDefault();
		await updateStudent(product);
		navigate('/');
	};

	return (
		<div className=' h-screen w-full '>
			<div className=' flex flex-col items-center justify-center h-full mb-20'>
				<span className=' text-2xl font-bold capitalize'>{detectForm(id, 'ADD DATA', 'EDIT DATA')}</span>
				<form className=' flex flex-col items-center justify-center' onSubmit={detectForm(id, PostingData, EditData)}>
					<div className='my-2'>
						<input className={inputCls} type='text' placeholder='Name' required name='name' value={product?.name} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='Email' required name='email' value={product?.email} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='Phone' required name='phone' value={product?.phone} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='Address' required name='address' value={product?.address} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='status' required name='status' value={product?.status} onChange={(e) => handleInputChange(e)} />
					</div>

					<button disabled={addLoading || updateLoading} className={saveBtnCls}>
						{addLoading || updateLoading ? '...loading' : detectForm(id, 'SUBMIT DATA', 'EDIT DATE')}
					</button>
				</form>
			</div>
		</div>
	);
};

const inputCls = ' bg-slate-100 py-2 px-4 border border-green-900 border-solid rounded-md w-[350px]';
const saveBtnCls = ' bg-slate-700 p-2 text-white w-[350px] rounded-md';

export default InsertData;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddData, getData, updateData } from '../feature/InstructorSlice';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
	name: '',
	email: '',
	phone: '',
	address: '',
	status: '',
};

const InsertData = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// console.log(id);

	const { dataAll, isLoading } = useSelector((state) => state.InstructorReducer);

	const singleProduct = dataAll.find((item) => item._id === id);

	// const [product, setProduct] = useState(...initialState);

	const [product, setProduct] = useState(() => {
		const newState = detectForm(id, { ...initialState }, singleProduct);
		return newState;
	});

	useEffect(() => {
		dispatch(getData());
	}, []);

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

	const PostingData = (e) => {
		e.preventDefault();
		dispatch(AddData(product));

		setTimeout(() => {
			navigate('/');
		}, 500);
	};

	const EditData = (e) => {
		e.preventDefault();
		dispatch(updateData(product));

		setTimeout(() => {
			navigate('/');
		}, 500);
	};

	return (
		<div className=' h-screen w-full '>
			<div className=' flex flex-col items-center justify-center h-full'>
				<span className=' text-2xl font-bold capitalize'>{detectForm(id, 'ADD DATA', 'EDIT DATA')}</span>
				<form className=' flex flex-col items-center justify-center' onSubmit={detectForm(id, PostingData, EditData)}>
					<div className='my-2'>
						<input className={inputCls} type='text' placeholder='Product name' required name='name' value={product?.name} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='Product email' required name='email' value={product?.email} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='Product phone' required name='phone' value={product?.phone} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='Product name' required name='address' value={product?.address} onChange={(e) => handleInputChange(e)} />
					</div>
					<div className='my-2 '>
						<input className={inputCls} type='text' placeholder='Product status' required name='status' value={product?.status} onChange={(e) => handleInputChange(e)} />
					</div>
					{/* <input type='number' placeholder='Product price' required name='price' value={product.price} onChange={(e) => handleInputChange(e)} />
					<label>Product Company/Brand:</label>
					<input type='text' placeholder='Product brand' required name='brand' value={product.brand} onChange={(e) => handleInputChange(e)} /> */}
					<button disabled={isLoading} className={saveBtnCls}>
						{isLoading ? '...loading' : detectForm(id, 'SUBMIT DATA', 'EDIT DATE')}
					</button>
				</form>
			</div>
		</div>
	);
};

const inputCls = ' bg-slate-100 py-2 px-4 border border-green-900 border-solid rounded-md w-[250px]';
const saveBtnCls = ' bg-slate-700 p-2 text-white w-[250px] rounded-md';

export default InsertData;

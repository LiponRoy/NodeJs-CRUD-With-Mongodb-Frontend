import { useState, useEffect } from 'react';
import { Input, Row, Col, Button, Card, message } from 'antd';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getOneData, updateData } from '../feature/InstructorSlice';
import { useDispatch, useSelector } from 'react-redux';
const key = 'updatable';

const UpdateData = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();

	const [data, setData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		status: '',
	});

	const { singleData, isLoading, isError, message } = useSelector((state) => state.InstructorReducer);

	useEffect(() => {
		dispatch(getOneData(id));
		setData();
	}, []);

	const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });                

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateData(data));

		// after submit data
		setData({
			name: '',
			email: '',
			phone: '',
			address: '',
			status: '',
		});

		navigate('/');
	};
	console.log(Object.values(data).every((el) => el == ''));
	return (
		<form onSubmit={handleSubmit}>
			<Card title='Edit a new student'>
				<Row gutter={[0, 20]}>
					<Col span={24}>
						<Input size='large' placeholder='Enter title' onChange={handleChange} name='title' value={data.name} disabled={isLoading} />
					</Col>
					<Col span={24}>
						<Input size='large' placeholder='Enter otherText' onChange={handleChange} name='otherText' value={data.email} disabled={isLoading} />
					</Col>
					<Col span={24}>
						<Input size='large' placeholder='Enter mobile_no' onChange={handleChange} name='mobile_no' value={data.phone} disabled={isLoading} />
					</Col>
					<Col span={24}>
						<Input size='large' placeholder='Enter mobile_no' onChange={handleChange} name='mobile_no' value={data.address} disabled={isLoading} />
					</Col>
					<Col span={24}>
						<Input size='large' placeholder='Enter mobile_no' onChange={handleChange} name='mobile_no' value={data.status} disabled={isLoading} />
					</Col>
					<Col span={24}>
						<Button htmlType='submit' loading={isLoading} disabled={isLoading} type='primary'>
							Update Student
						</Button>
					</Col>
				</Row>
			</Card>
		</form>
	);
};

export default UpdateData;

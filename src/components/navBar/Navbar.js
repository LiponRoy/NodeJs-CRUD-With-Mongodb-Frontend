import React from 'react';
import './Navbar.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className=' w-full h-16  bg-primary flex items-center justify-center gap-2'>
				<span className='text-xl md:text-2xl text-white font-semibold font-shantell '>Instructor CRUD operation!</span>

				<Button onClick={() => navigate('/postData/ADD')} variant='contained' color='success'>
					ADD DATA
				</Button>
				<Button onClick={() => navigate('/')} variant='contained' color='success'>
					Home
				</Button>
			</div>
		</>
	);
};

export default Navbar;

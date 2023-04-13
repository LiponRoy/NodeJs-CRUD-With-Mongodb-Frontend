import React from 'react';
import './Navbar.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className=' bg-gray-700 flex content-center justify-center'>
				<div className=' w-full h-[70px] top-0 left-0  text-white px-8 z-50 shadow-md '>
					<div className=' w-full h-full flex items-center justify-between'>
						<span onClick={() => navigate('/')} className=' text-2xl font-bold cursor-pointer border-2 border-red-900'>
							Instractor Info
						</span>

						<div className=' flex items-center content-center gap-2'>
							<Button onClick={() => navigate('/')} variant='outlined' sx={{ color: 'white', border: '1px solid white ', margin: '2px' }}>
								Home
							</Button>
							<Button onClick={() => navigate('/postData/ADD')} variant='outlined' sx={{ color: 'white', border: '1px solid white ', margin: '2px' }}>
								ADD DATA
							</Button>
						</div>
					</div>
				</div>
			</div>
			{/* <div className=' w-full h-16 bg-neutral-600 flex items-center justify-center gap-2 text-white'>
				<span className='text-xl md:text-2xl text-white font-semibold font-shantell '>Instructor CRUD operation!</span>
				<div className=''>
					<Button onClick={() => navigate('/')} variant='outlined' sx={{ color: 'white', border: '1px solid white ', margin: '2px' }}>
						Home
					</Button>
					<Button onClick={() => navigate('/postData/ADD')} variant='outlined' sx={{ color: 'white', border: '1px solid white ', margin: '2px' }}>
						ADD DATA
					</Button>
				</div>
			</div> */}
		</>
	);
};

export default Navbar;

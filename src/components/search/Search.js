import React from 'react';
// import styles from "./Search.module.scss";
import { BiSearch } from 'react-icons/bi';

const Search = ({ value, onChange }) => {
	return (
		<div className='  flex justify-center md:justify-start items-center gap-x-2 my-4'>
			<input className=' border border-blue-900 pl-2 rounded-md p-2' type='text' placeholder='Search by name' value={value} onChange={onChange} />
			<BiSearch size={26} className=' animate-pulse' />
		</div>
	);
};

export default Search;

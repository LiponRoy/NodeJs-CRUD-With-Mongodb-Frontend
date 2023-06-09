import React from 'react';

const Hero = () => {
	return (
		<div>
			<section class={heroContainer}>
				<div class={gridLayout}>
					<div class={leftSide}>
						<p class='text-4xl font-bold text-xl md:text-4xl '>MERN STACK CRUD USING RTK QUERY</p>
						<span className=' text-2xl mb-1 font-medium'>(Instractor data)</span>
					</div>
					<div class={rightSide}>
						<img class='h-10 w-10 object-cover lg:w-[100px] lg:h-[100px]' src='pencil.png' alt='' />
					</div>
				</div>
			</section>
		</div>
	);
};

const heroContainer = ' px-3 py-5 bg-neutral-100 lg:py-10 ';
const gridLayout = 'grid lg:grid-cols-2 items-center justify-items-center gap-5';
const leftSide = 'order-2 lg:order-1 flex flex-col justify-center items-center gap-2';
const rightSide = 'order-1 lg:order-2';

export default Hero;

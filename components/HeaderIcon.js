import React from 'react';

function HeaderIcon({ Icon, active }) {
	return (
		<div className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl active:bottom-2 active:border-blue-500 group">
			<Icon
				className={`h-5 text-grey-500 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${
					active && 'text-blue-500'
				}`}
			/>
		</div>
	);
}

export default HeaderIcon;

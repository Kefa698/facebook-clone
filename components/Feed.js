import React from 'react';
import InputBox from './InputBox';
import Stories from './Stories';

function Feed() {
	return (
		<div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40">
			<div>
				{/* stories */}
				<Stories className="max-w-md mx-auto md:max-w-lg" />
				{/* inputbox */}
				<InputBox />
				{/* posts */}
			</div>
		</div>
	);
}

export default Feed;

import React from 'react';
import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

function Feed() {
	return (
		<div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40">
			<div>
				
				<Stories className="max-w-md mx-auto md:max-w-lg" />
				
				<InputBox />
			
				<Posts />
			</div>
		</div>
	);
}

export default Feed;

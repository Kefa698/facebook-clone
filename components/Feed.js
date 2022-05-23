import React from 'react';
import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

function Feed({posts}) {
	return (
		<div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 scrollbar-hide">
			<div>
				
				<Stories />
				
				<InputBox />
			
				<Posts posts= {posts}/>
			</div>
		</div>
	);
}

export default Feed;

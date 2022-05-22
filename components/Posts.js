import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';

function Posts() {
	const [realtimePosts] = useCollection(
		db.collection('posts').orderBy('timestamp', 'desc')
	);
	return (
		<div>
			{realtimePosts?.docs.map((posts) => {
				<Post
					key={posts.id}
					name={posts.data().name}
					message={posts.data().message}
					email={posts.data().email}
					timestamp={posts.data().timestamp}
					image={posts.data().image}
					postImage={posts.data().postImage}
				/>;
			})}
		</div>
	);
}

export default Posts;

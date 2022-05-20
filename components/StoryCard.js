import Image from 'next/image';
import React from 'react';

function StoryCard({ name, src, profile }) {
	return (
		<div className='relative h-14 w-14'>
			<Image
				className="absolute z-50 rounded-full opacity-0 lg:opacity-100 top-10"
				src={profile}
				width={40}
				height={40}
				layout="fixed"
				objectFit="cover"
			/>
			<Image className="object-cover rounded-full filter brightness-75 lg:rounded-3xl"
            src={src}
            layout='fill'
            />
		</div>
	);
}

export default StoryCard;

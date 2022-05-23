import Image from 'next/image';
import React from 'react';
import {ChatIcon,ThumbUpIcon,ShareIcon} from '@heroicons/react/outline'

function Post({ name, image, message, email, postImage, timestamp }) {
	return (
		<div className="flex flex-col">
			<div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
				<div className="flex items-center space-x-2">
					<Image
						className="rounded-full"
						src={image}
						width={40}
						height={40}
						alt=""
					/>

					<div>
						<p className="font-medium">{name}</p>
						{timestamp ? (
                        <p className="text-xs text-gray-400">
							{new Date(timestamp?.toDate()).toLocaleString()}
						</p>
						):(
							<p className='text-xs text-gray-400'>loading</p>
						)}
						
					</div>
				</div>
				<p className="pt-4">{message}</p>
			</div>
			{postImage && (
				<div className="relative h-56 md:h-96 bg-white">
					<Image src={postImage} objectFit="cover" layout="fill" alt="" />
				</div>
			)}
			{/* footer */}
			<div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
				<div className="inputIcon rounded-none">
					<ThumbUpIcon className="h-4" />
					<p className="text-xs sm:text-base">like</p>
				</div>
				<div className="inputIcon rounded-none">
					<ChatIcon className="h-4" />
					<p className="text-xs sm:text-base">like</p>
				</div>
				<div className="inputIcon rounded-none">
					<ShareIcon className="h-4" />
					<p className="text-xs sm:text-base">like</p>
				</div>
			</div>
		</div>
	);
}

export default Post;

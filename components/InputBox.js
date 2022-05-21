import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRef } from 'react';
import { db } from '../firebase';
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/firestore'; //v9
function InputBox() {
	const { data: session } = useSession();
	const inputRef = useRef(null);
	const sendPost = (e) => {
		e.preventDefault();
		if (!inputRef.current.value) return;
		db.collection('posts').add({
			message:inputRef.current.value,
			name:session.user.name,
			email:session.user.email,
			image:session.user.image,
			timestamp:firebase.firestore.FieldValue.serverTimestamp()
		});
		inputRef.current.value='';
		
	};

	return (
		<div className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl">
			<div className="flex items-center p-4 space-x-4">
				<Image
					className="rounded-full "
					src={session.user.image}
					width={40}
					height={40}
					layout="fixed"
					alt=""
				/>
				<form className="flex flex-1">
					<input
					ref={inputRef}
						className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
						type="text"
						placeholder={`Whats on your mind, ${session.user.name}`}
					/>
					<button hidden onClick={sendPost} type="submit">
						Submit
					</button>
				</form>
			</div>
			<div className="flex p-3 justify-evenly border-top">
				<div className="inputIcon">
					<VideoCameraIcon className="text-red-500 h-7" />
					<p className="text-xs sm:text-sm xl:text-base">Live video</p>
				</div>
				<div className="inputIcon">
					<CameraIcon className="text-green-300 h-7" />
					<p className="text-xs sm:text-sm xl:text-base">Live video</p>
				</div>
				<div className="inputIcon">
					<EmojiHappyIcon className="text-yellow-300 h-7" />
					<p className="text-xs sm:text-sm xl:text-base">Live video</p>
				</div>
			</div>
		</div>
	);
}

export default InputBox;

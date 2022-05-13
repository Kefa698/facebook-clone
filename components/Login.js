import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

function Login() {
	return (
		<div className="grid place-items-center">
			<Image
				src="https://www.facebook.com/images/fb_icon_325x325.png"
				width={400}
				height={400}
				objectFit="contain"
			/>
			<h1
				onClick={() => signIn()}
				className="p-5 text-center text-white bg-blue-500 rounded-full cursor-pointer"
			>
				Login with Facebook
			</h1>
		</div>
	);
}

export default Login;

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		loader: 'imgix',
		path: 'https://noop/',
		domains: [
			'www.facebook.com',
			'platform-lookaside.fbsbx.com',
			'firebasestorage.googleapis.com',
			' media-exp1.licdn.com',
			'avatars.githubusercontent.com',
			'https://avatars.githubusercontent.com/u/55787467?v=4',
			'lh3.googleusercontent.com',
			'media-exp1.licdn.com',
			'www.biography.com',
			'i.guim.co.uk',
			'static01.nyt.com',
		],
	},
	reactStrictMode: true,
	eslint:{
		ignoreDuringBuilds:true,
	}
};

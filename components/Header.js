import Image from 'next/image';
import React from 'react';
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from '@heroicons/react/solid';
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/react';
function Header() {
	//to fix later
	const { data: session } = useSession();
	return (
		<div className="sticky top-0 z-50 flex items-center bg-white shadow-md lg:px-5">
			{/* left */}
			<div className="flex items-center">
				<img
					src="https://www.facebook.com/images/fb_icon_325x325.png"
					height={40}
					width={40}
					layout="fixed"
					alt=''
				/>
				<div className="flex items-center p-2 ml-2 bg-gray-100 rounded-full">
					<SearchIcon className="w-5 h-5 " />
					<input
						className="flex-shrink hidden ml-2 bg-transparent outline-none md:inline-flex placeholder:gray-500"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>
			{/* center */}
			<div className="flex justify-center flex-grow">
				<div className="flex space-x-6 md:space-x-2">
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>
			{/* right */}
			<div className="flex items-center justify-end sm:space-x-2">
				{/* profile picture */}

				<img
					onClick={() =>
						signOut({
							callbackUrl:
								'http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F',
						})
					}
					className="rounded-full cursor-pointer"
					src={session?.user?.image}
					width={40}
					height={40}
					layout="fixed"
					alt=''
				/>
				<p className="pr-3 font-semibold whitespace-nowrap">
					{session?.user?.name}
				</p>
				<ViewGridIcon className="icon" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	);
}

export default Header;

import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
	{
		src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
		name: 'jeff bezos',
	},
	{
		src: 'https://static01.nyt.com/images/2022/06/10/world/10virus-briefing-bill-gates-1/10virus-briefing-bill-gates-1-mediumSquareAt3X.jpg',
		name: 'Bill gates',
	},
	{
		name: 'kefaisaboke',
		src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
	},
	{
		name: 'jeff bezos',
		src: 'https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e',
	},
];

function Widgets() {
	return (
		<div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
			<div className="flex justify-between items-center text-gray-500 mb-5">
				<h2 className="text-xl">Contacts</h2>
				<div className="flex space-x-2">
					<VideoCameraIcon className="h-6" />
					<SearchIcon className="h-6" />
					<DotsHorizontalIcon className="h-6" />
				</div>
			</div>
            {contacts.map(contact=>(
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
		</div>
	);
}

export default Widgets;

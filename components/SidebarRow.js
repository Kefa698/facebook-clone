import Image from 'next/image';
import React from 'react';

function SidebarRow({ src, Icon, title }) {
	return <div className='flex items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl'>
        {src && (
            <Image
            className='rounded-full '
            src={src} width={30} height={30}
            layout='fixed'
            />
        )}
        {Icon && (
        <Icon className='w-8 h-8 text-blue-500' />
        )}
        <p className='hidden font-medium sm:inline-flex'>{title}</p>
    </div>;
}

export default SidebarRow;

import React from 'react'

function Post({name,image,message,email,postImage,timestamp}) {
  return (
    <div className='flex flex-col'>
        <div>
            <div> 
                hit
                <img className='rounded-full' src={image} width={40} height={40} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Post
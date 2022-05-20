import React from 'react'
import StoryCard from './StoryCard'
const stories=[
    {
        name:'kefaisaboke',
        src:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
        profile:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
    },
    {
        name:'kefaisaboke',
        src:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
        profile:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
    },
    {
        name:'kefaisaboke',
        src:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
        profile:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
    },
    {
        name:'kefaisaboke',
        src:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
        profile:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
    },
]

function Stories() {
  return (
    <div className='flex justify-center mx-auto space-x-3'>
        {stories.map(story=>(
            <StoryCard name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
  )
}

export default Stories
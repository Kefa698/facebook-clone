import React from 'react'
import StoryCard from './StoryCard'
const stories=[
    {
        name:'kefaisaboke',
        src:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
        profile:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
    },
    {
        name:'Bill gates',
        src:'https://static01.nyt.com/images/2022/06/10/world/10virus-briefing-bill-gates-1/10virus-briefing-bill-gates-1-mediumSquareAt3X.jpg',
        profile:'https://static01.nyt.com/images/2022/06/10/world/10virus-briefing-bill-gates-1/10virus-briefing-bill-gates-1-mediumSquareAt3X.jpg',
    },
    {
        name:'elon musk',
        src:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg',
        profile:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg',
    },
    {
        name:'kefaisaboke',
        src:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
        profile:'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1658361600&v=beta&t=Be5q6Coz5EOSJoeL8WSWhQ-gV47w_0tzTjizRglzTog',
    },
    {
        name:'jeff bezos',
        src:'https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e',
        profile:'https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e',
    },
]

function Stories() {
  return (
    <div className='flex justify-center mx-auto space-x-3'>
        {stories.map(story=>(
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
  )
}

export default Stories
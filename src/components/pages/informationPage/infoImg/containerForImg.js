import React from 'react'
import './style.css'

const ImgBlock = () => {
  return <section className='pic_container'>
    <div className='mainPic'>
    </div>
    <div>
        <img src={'https://thumb.tildacdn.com/tild3361-6435-4630-b563-656530313235/-/resize/300x300/-/format/webp/noroot.png'}/>
        <img src={'https://thumb.tildacdn.com/tild3435-3536-4562-a161-613063613038/-/resize/300x300/-/format/webp/noroot.png'} alt={'undefined Third pic'}/>
    </div>
    </section>
}

export default ImgBlock

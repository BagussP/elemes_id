import Image from 'next/image'
import React from 'react'
import HeadlineDescription from './HeadlineDescription/HeadlineDescription'
import HeadlineImage from './HeadlineImage/HeadlineImage'

const Headline = () => {
  return (
    <div className='headline'>
        <HeadlineDescription />
        <HeadlineImage />
        
    </div>
  )
}

export default Headline
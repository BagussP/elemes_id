import React from 'react'

const Title = ({className, text}) => {
  return (
    <div className={className}>
        <h1>Browser Our {text}</h1>
        <h1 className='text-primary'>Receipt</h1>
    </div>
  )
}

export default Title
import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between header'>
        <h1 className='text-secondary text-4xl font-semibold'>PortFolio</h1>
        <h1 className='text-white text-4xl font-semibold'></h1>
        <h1 className='text-tertiary text-4xl font-semibold'>
          <img style={{width: "30px"}} src='https://tse4.mm.bing.net/th?id=OIP.vMXR1hsrQ1GQPBtz9BoQnAHaHa&pid=Api&P=0&h=180' alt='' />
        </h1>
    </div>
  )
}

export default Header
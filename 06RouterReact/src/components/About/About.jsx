import React from 'react'

function About() {
  return (
    <>
      <div className='flex w-full px-20 pt-9 pb-9 gap-3'>
        <div className='flex justify-center items-center rounded-md w-1/2'>
          <img className='rounded-md' src="https://www.condecosoftware.com/blog/wp-content/uploads/sites/11/2020/08/Condeco-Software_What-makes-a-good-meeting...-the-technology-the-people-or-the-space.jpg" alt="" />
        </div>
        <div className='flex flex-col w-1/2 gap-4 justify-center items-center'>
          <h2 className='text-4xl'>Faster Than You Think</h2>
          <p className='w-3/4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugit officia animi architecto illo dolor, laborum nostrum ex accusantium corrupti explicabo sint cum veniam repellat, dicta blanditiis similique. Ex inventore suscipit est soluta hic! In nostrum fugit animi eos impedit nam laudantium aperiam, porro, mollitia minima officia ad facere hic?</p>
        </div>
      </div>
    </>
  )
}

export default About

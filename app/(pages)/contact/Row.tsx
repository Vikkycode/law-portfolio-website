import React from 'react'
import image from '../../../public/images/law.png'
import Image from 'next/image'
import Form from '../../components/common/Form'


const Row = () => {
  return (
    <div className='min-h-[100vh] max-w-[1300px] mx-auto py-10 lg:py-20 px-4 lg:px-0'>
        <div className='flex justify-between items-center flex-col lg:flex-row '>
                <Image 
                src={image}
                height={620}
                width={528}
                alt='law cap'
                className='h-[510px] block w-[353px] lg:h-[620px] lg:w-[528px]  rounded-[24px]'
                />
            <div>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default Row
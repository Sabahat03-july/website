import Image from 'next/image'
import React from 'react'

const Survey = () => {
  return (
    <div className='container pt-40'>
        <div className='grid lg:grid-cols-[50%,1fr] gap-20'> 
            <div >
<Image src="/Survey-for-food-service.jpg" alt=' Survey' height={1000} width={600}/>
            </div>
            <div className='self-center'>
                <h2 className='text-4xl md:text-6xl font-bold'> Survey</h2>
                <h2 className='text-4xl md:text-6xl font-bold pt-3'>
                    About Our <span className='text-accent'>Food</span>
                </h2>
                <p className='text-gray-700 pt-16'>
                We value your feedback!
Please take a moment to complete our quick survey.
Your insights help us improve our services.
Thank you for your time!


                </p>

            </div>

        </div>
    </div>
  )
}

export default Survey
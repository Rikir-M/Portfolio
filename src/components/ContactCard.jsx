import React from 'react'

const ContactCard = () => {
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className='p-[25px] md:p-[35px] bg-white col-span-1'>
        <h2 className='text-[32px] font-semibold mb-[5px]'>Get in touch</h2>
        <p className="text-[18px] mb-[30px] text-textColor">Our friendly team would love to hear from you.</p>
        <form onSubmit={submitHandler}>
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="col-span-2 md:col-span-1">
                  <div className='flex flex-col gap-2'>
                  <label className='text-lg'>First Name</label>
                    <input type="text" placeholder='Name *' className='border border-secondary py-2 px-4 text-lg focus:outline-none'/>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className='flex flex-col gap-2'>
                  <label className='text-lg'>Your Email</label>
                    <input type="text" placeholder='Email *' className='border border-secondary py-2 px-4 text-lg focus:outline-none'/>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className='flex flex-col gap-2'>
                  <label className='text-lg'>Subject</label>
                    <input type="text" placeholder='Subject *' className='border border-secondary py-2 px-4 text-lg focus:outline-none'/>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className='flex flex-col gap-2'>
                  <label className='text-lg'>Your Message</label>
                    <textarea rows={5} type="text" placeholder='Your Message *' className='border border-secondary py-2 px-4 text-lg focus:outline-none'/>
                  </div>
                </div>
            </div>
            <button className="uppercase mt-[10px] py-[10px] px-[20px] tracking-[2px] yellowish font-medium  bg-caution">
             send message
            </button>
        </form>
 
    </div>
  )
}

export default ContactCard
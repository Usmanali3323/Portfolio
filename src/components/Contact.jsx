import React from 'react'


function Contact() {
    return (
    <div name='contact' className='h-full pt-40 pb-20 bg-gradient-to-b from-black to-gray-500 text-white '>
    <div className='flex flex-col p-4  max-w-screen-lg mx-auto h-full'>
      <div className='mb-12'>
        <p className='text-4xl inline border-b-4 border-gray-500'>
          Contact
        </p>
        <p className='mt-8'>
         submit the form below to Get in touch with me
        </p>
      </div>
      <div className='flex justify-center items-center'>
      <form action='https://getform.io/f/53f24d2a-7d53-4991-9253-d6b0d9497e3f' method='post' className='flex flex-col w-full md:w-1/2 '>
        <input type='text' name='name' className='bg-transparent p-2 focus:outline-none border-2 rounded-md border-white'  placeholder='Enter the Name'/>
        <input type='email' name='email' className='bg-transparent p-2 focus:outline-none border-2 rounded-md border-white my-5' placeholder='Enter the Email'/>
        <textarea placeholder='message' name='message' className='bg-transparent p-2 focus:outline-none border-2 rounded-md border-white' rows="10"></textarea>
       <div className='flex justify-end'>
       <button className='mt-10 px-6 flex items-center py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:scale-105 duration-300'>Let's Talk</button>
       </div> 
      </form>
      </div>
      </div>
    </div>
  )
}

export default Contact;

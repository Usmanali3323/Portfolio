import React from 'react'

function About() {
  return (
    <div name='about' className='lg:mt-0 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-500 to-black text-white'>
        <div className='mt-20 lg:mt-0 max-w-screen-lg flex flex-col justify-center mx-auto w-full h-full px-6'>
        <div className='pb-8'>
        <p className='inline text-4xl font-bold mb-20 text-white border-b-4 border-gray-500 '>
                About
            </p>
        </div>
            <div className='text-xl text-justify'>
                <p className='mt-10'>
                    My Name is Usman Ali. I'm frontend web Developer. I have 1 year experience
                    with frontend Technology. I love to work with web Application using frontend Technology
                    like HTML, CSS, JAVASCRIPT, React, Tailwind etc. 
                </p>
                <br/>
                <p>
                I did ADP in Computer science from ICB G-6/3 Islamabad affliated with Quaid-e-Azam University.
                 When I was in First semester of ADP Computer science. Information Technology (CS-100) was one
                  subject in my First semester with other subject. it was just about basic of computer fundemental 
                  and as well as HTML. when I came in second semester. Having completed HTML I started to learn 
                  web Technology like CSS, JAVASCRIPT ,React JS, Tailwind by ownself through internet. It has been 
                  1.5 year to having learning to me because I was learning parallely with my college Degree and   .I also made some 
                  Project that mention in below portflio section.  
                </p>
            </div>
        </div>
    </div>
  )
}

export default About;
import React from 'react'

const ResumePage = () => {
  return (
    <div id='resume'>
        <div className='flex flex-col md:flex-row align-middle justify-center w-[80vw] md:w-[50vw] md:h-[85vh]'>
            <div className='flex md:flex-col justify-center text-left'>
              <h1 className='text-3xl md:text-5xl md:pr-20 text-center pb-5 md:pb-0 font-bold'>Resume</h1>
            </div>
            <iframe src={'http://localhost:3000/Resume.pdf'} frameBorder='0' title="Resume Content" className='w-full h-[60vh] md:h-[80vh]'></iframe>
        </div>
    </div>
  )
}

export default ResumePage
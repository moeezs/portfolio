import React from 'react'
import { Download } from 'lucide-react'
import { Button } from './ui/button'

const ResumePage = () => {
  return (
    <div id='resume'>
        <div className='flex flex-col md:flex-row align-middle justify-center w-[80vw] md:w-[50vw] md:h-[85vh]'>
            <div className='flex flex-col justify-center text-center items-center md:pr-20  pb-5 md:pb-0'>
              <h1 className='text-3xl md:text-5xl text-center pb-0 font-bold'>Resume</h1>
              <a href='/Resume_Abdul Moeez Shaikh.pdf' download>
                <Button variant="outline" size="sm" className="mt-4 text-xs">
                  <Download className="mr-2 h-3 w-3" />
                  Download Resume
                </Button>
              </a>
            </div>
            <iframe src={'/Resume_Abdul Moeez Shaikh.pdf'} frameBorder='0' title="Resume Content" className='w-full h-[55vh] md:h-[80vh]'></iframe>
        </div>
    </div>
  )
}

export default ResumePage

import React from 'react'

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
 
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";


const AboutPage = () => {
  return (
    <div id='about'>
        <BentoGrid className="lg:grid-rows-4">
          <BentoCard name='pictures' className='' background='' Icon={BellIcon} description='This is a picture card.' href='https://example.com' cta={''}/>
        </BentoGrid>
    </div>
  )
}

export default AboutPage
import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          {/* socials */}
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconStyles='text-primary text-[20px] hover:text-white dark:hover:text-background transition-all'/>
          {/* copyright */}
          <div className='text-center text-muted-foreground mt-8'>
            <p>© 2024 - {new Date().getFullYear()} - <span className=''>Angel J. Carrion</span></p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
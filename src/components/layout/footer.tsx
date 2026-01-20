import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import Logo from '@/components/logo'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8 lg:px-8'>
        <a href='#'>
          <div className='flex items-center gap-3'>
            <Logo className='gap-3' />
          </div>
        </a>
        <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2 whitespace-nowrap sm:gap-5'>
          <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Support
          </a>
          <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Terms & Conditions
          </a>
          <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Privacy Policy
          </a>
        </div>

        <div className='flex items-center gap-4'>
          <a href='#' target='blank'>
            <FacebookIcon className='size-5' />
          </a>
          <a href='#' target='blank'>
            <InstagramIcon className='size-5' />
          </a>
          <a href='#' target='blank'>
            <TwitterIcon className='size-5' />
          </a>
          <a href='#' target='blank'>
            <YoutubeIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6 lg:px-8'>
        <p className='flex items-center gap-1 text-center font-medium text-balance max-sm:flex-col'>
          <span>
            {`©${new Date().getFullYear()}`}{' '}
            <a className='hover:underline' href='#'>
              INK
            </a>
          </span>
          <span>, Made with ❤️ for better web.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer

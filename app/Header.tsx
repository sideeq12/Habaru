import React from 'react'
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import NavLinks from './navlinks';

function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 items-center p-10'>
        <Bars3Icon className='h-8 w-8 cursor-pointer' />
        <Link href="/" prefetch={false}>
        <h1 className='font-serif text-3xl'> The {" "}
            <span className='underline decoration-6 decoration-orange-400'>HABARU</span>
            {" "} MEDIA</h1>
        </Link>
        <div className='flex items-center justify-end space-x-2'>
            {/* {subscribe now button} */}

            <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 lg:py-4 py-2 rounded-full dark:bg-slate-800'>
                Subscribe now
            </button>
        </div>
        </div>
        <NavLinks />
    </header>
  )
}

export default Header
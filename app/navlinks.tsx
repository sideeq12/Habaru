"use client";

import React from 'react'
import { categories } from '../constant'
import Navlink from './Navlink'
import { usePathname } from 'next/navigation';

function NavLinks() {
    const Pathname = usePathname() ;
    const isActive = (path : String ) =>{
       return  Pathname?.split("/").pop() === path
    }
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:sm gap-4 max-w-6xl pb-10 mx-auto mb-1 border-b'>{
        categories.map(category =>
            <Navlink key={category} category={category} isActive={isActive(category)} />)
        }</nav>
  )
}

export default NavLinks
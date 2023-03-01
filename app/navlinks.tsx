import React from 'react'
import { categories } from '../constant'
import Navlink from './Navlink'

function NavLinks() {
  return (
    <div>{
        categories.map(category =>
            <Navlink key={category} category={category} isActive={true} />)
        }</div>
  )
}

export default NavLinks
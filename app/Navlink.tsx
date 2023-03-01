

import Link from 'next/link'
import React from 'react'

type Props = {
    category : string,
    isActive : boolean
}

function Navlink( {category, isActive } : Props) {

  return (
    <Link href={`/news/${category}`} className={`navlink ${isActive && "underline underline-offset-4 font-bold decoration-orange-400 text-lg"}`}>
        {category}
    </Link>
  )
}

export default Navlink
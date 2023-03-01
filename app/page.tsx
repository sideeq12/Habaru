import React from 'react'
import { categories } from '../constant'

async function HomePage() {
    const news : NewsResponse = await fetchNews(categories.join(","))
  return (
    <div>HomePage</div>
  )
}

export default HomePage;
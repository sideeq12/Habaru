import React from 'react'
import { categories } from '../constant'
import fetchNews from '../lib/fetchNews';

async function HomePage() {
    // const news : NewsResponse = await fetchNews(categories.join(","))
  return (
    <div>HomePage</div>
  )
}

export default HomePage;
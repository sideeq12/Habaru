import React from 'react'
import { categories } from '../constant'
import fetchNews from '../lib/fetchNews';
import NewsCard from './newsCard';

async function HomePage() {
    // const news : NewsResponse = await fetchNews(categories.join(","))
    // API endPoint = http://api.mediastack.com/v1/news?access_key=110a0ca044526e7f4daf864beeccd5b9&sources=business,sports
    // const newsData = await fetch("http://api.mediastack.com/v1/news?access_key=110a0ca044526e7f4daf864beeccd5b9&sources=business,sports");
    // const data = await newsData.json();
    console.log("The data is here")

    return (
    <div>
      News feed
      </div>
  )
}

export default HomePage;
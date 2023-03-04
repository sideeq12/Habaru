"use client"

import React from 'react'
import { categories } from '../constant'
import fetchNews from '../lib/fetchNews';
import NewsCard from './newsCard';

async function HomePage() {

    interface NewsBlog {
      author : string;
      title : string;
      description : string;
      category : string;
      url : string;
      published_at : string
    }
    // const news : NewsResponse = await fetchNews(categories.join(","))
    // API endPoint = http://api.mediastack.com/v1/news?access_key=110a0ca044526e7f4daf864beeccd5b9&sources=business,sports
    const newsData = await fetch("http://api.mediastack.com/v1/news?access_key=110a0ca044526e7f4daf864beeccd5b9&sources=business,sports");
    const main = await newsData.json();
    const news = await main
    const arr = Object.values(news);
    console.log("the info", typeof(arr))

    return (
    <div>
      {/* {news.map((newsInfo : NewsBlog)=>{
        <NewsCard
         news_title = {newsInfo.title}
         news_info = { newsInfo.description}
         news_date = {newsInfo.published_at}
          />
      })} */}
      lolo
      </div>
  )
}

export default HomePage;
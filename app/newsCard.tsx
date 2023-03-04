import React from 'react'

type newsData = {
    news_title : string,
    news_info : string,
    news_date : string
}

function NewsCard({ news_title, news_date, news_info } : newsData) {
  return (<div>
    canoe test 
    {/* <div>{ news_title}</div> */}
  </div>
  )
}

export default NewsCard
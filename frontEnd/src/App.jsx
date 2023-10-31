import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './Components/cards.jsx';

const App = () => {
  const [news, setNews] = useState([]);
  
  const getNews = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/topStories');
      setNews(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="flex flex-wrap">
      {news.map((newsItem, index) => (
        <NewsCard key={index} newsItem={newsItem} />
      ))}
    </div>
  );
}

export default App;

/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const News = () => {
  const [news, setNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState(6);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              category: 'sports',
              country: 'us',
              apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
            },
          },
        );
        // Filter articles to only include those with images
        const articlesWithImages = response.data.articles.filter(
          article => article.urlToImage,
        );
        setNews(articlesWithImages);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const loadMoreNews = () => {
    setVisibleNews(prevVisibleNews => prevVisibleNews + 6);
  };

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6 text-white"
        >
          Latest News
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {news.slice(0, visibleNews).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="max-w-sm bg-gray-900 shadow-md shadow-purple-700 p-4 rounded-lg flex flex-col justify-between"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mt-4 text-gray-300 text-center">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-justify flex-grow">
                  {article.description}
                </p>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline mt-2 flex items-center gap-2"
              >
                <span className="ml-2">👉</span>
                <span>Read more</span>
              </a>
            </motion.div>
          ))}
        </div>
        {visibleNews < news.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMoreNews}
              className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;

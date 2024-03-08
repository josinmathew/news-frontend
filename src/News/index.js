import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css";
import { fetchArticles } from "./news.service";

const NewsOverview = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, []);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const pageCount = Math.ceil(articles.length / articlesPerPage);

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="news-overview">
      <h2>News Overview</h2>
      <ul>
        {paginatedArticles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <Link to={`/news/${article.id}`}>
              <button>Read More...</button>
            </Link>
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <div className="pagination">
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePaginationClick(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsOverview;

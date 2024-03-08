import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticleById } from "./news.service";

function NewsDetail() {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticleById(id);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-detail">
      <h2>{article.title}</h2>
      <div className="back-overview">
        <Link to={`/news`}>
          <button>Back to overview</button>
        </Link>
      </div>
      <div className="news-area">{article.description}</div>
    </div>
  );
}

export default NewsDetail;

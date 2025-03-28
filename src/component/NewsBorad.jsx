import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function NewsBorad({ category, setCategory, totalResults }) {
  const [article, setArticle] = useState([]);

  
  useEffect(() => {
    // let api_key = import.meta.env.VITE_API_KEY
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
    console.log(category);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data.articles);
        console.log("Fetched Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category]);


  return (
    <div className="container bg-light b-1 pt-3">
      <h1 className="text-center fs-200 pb-3 border-4  border-warning ">
        Latest News </h1>
        <div class="dropdown text-center">
          <a
            class="btn btn-secondary dropdown-toggle bg-primary text-capitalize"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {category}{" "}
            <span class="position-relative start-50 top-0  translate-middle badge rounded-pill bg-danger">
              {totalResults}
            </span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item active"
                onClick={() => setCategory("business")}
              >
                Business
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("health")}
              >
                Health
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("science")}
              >
                Science
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("sports")}
              >
                Sports
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("technology")}
              >
                Technology
              </a>
            </li>
          </ul>
        </div>
      

      <div>
    
        {article.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              imgUrl={news.urlToImage}
              desc={news.description}
              url={news.url}
              author={news.author}
              content={news.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewsBorad;

import React from "react";

function NewsItem({ title, desc, url, imgUrl, author }) {
  return (
    <div className="card d-inline-block m-1 row " style={{ minHeight: '10rem' , width:"26rem" }}>
      <div class="card-body col">
        <img src={imgUrl} className="card-img-top" alt={title} />
        <p className="text-dark fs-10">Author: {author}</p>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {desc
              ? desc.slice(0, 100)
              : "Travel demand is showing signs of slowing down. And as Americans spend less on trips this summer."}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;

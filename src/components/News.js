import React, { useEffect, useState } from "react";
import NewItem from "./NewsItem";
import Spinner from "./utils/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitilizeFirstLetter(
      props.category
    )} - News Monkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  let { category } = props;
  return (
    <>
      <h2 className="my-4 mt-5 text-center">
        <span className="text-success">News Monkey</span> -
        <span className="fw-bold text-decoration-underline text-danger">
          Top HeadLines
        </span>
      </h2>
      <hr className="mb-3 border-4" />
      <h3 className="text-center text-info-emphasis my-4">
        {capitilizeFirstLetter(category)}
      </h3>
      <hr className="mb-3 border-4" />
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">
          <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4`}>
            {articles.map((element) => {
              return (
                <div className="col mb-4" key={element.url}>
                  <NewItem
                    title={element.title} // && element.title.slice(0,19)
                    description={element.description} // && element.description.slice(0,65)
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

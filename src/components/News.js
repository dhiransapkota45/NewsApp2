import React from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";


export default function News(props) {
  const fetchMoreData = () => {}
  console.log(props.news_data);
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          {props.display ? (
            <div>
              {props.news_data.length <= 0 ? (
                <h3>No Result found for {props.btn_data}</h3>
              ) : (
                <h3>Search Result for {props.btn_data}</h3>
              )}
            </div>
          ) : (
            <h3>{props.category}-news</h3>
          )}
        </div>
        <div className="row">
            {props.news_data.map((news_data) => {
              return (
                <div className="col-md-4">
                  <NewsItem news_data={news_data} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

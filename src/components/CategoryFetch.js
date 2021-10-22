import React, { useEffect } from "react";
import News from "./News";
import Loader from "./Loader";
export default function CategoryFetch(props) {
  const {category_data, setCategory_data, pagesize, category, country, display, loader, setLoader,setItemLength,itemLength } = props
  useEffect(() => {
    const fetcher = async () => {
      const Link = `https://newsapi.org/v2/top-headlines?category=${category}&pagesize=${pagesize}&country=${country}&apiKey=c990aa0235da4635997afd1f7459860c`;
      const raw_daata = await fetch(Link);
      const daata = await raw_daata.json();
      console.log(daata);
      setCategory_data(daata.articles)
      setLoader(false)
      setItemLength(daata.totalResults)
      
    };
    fetcher();
  }, []);
  return (<>
  {loader ? <Loader />:
   <News news_data={category_data} category={category} display={display} itemLength={itemLength}/>}
  </>);
}

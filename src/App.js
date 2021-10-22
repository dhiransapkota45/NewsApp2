import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import NewsItem from "./components/NewsItem";
import News from "./components/News";
// import Loader from "./components/Loader";
import { Switch, Route } from "react-router-dom";
import CategoryFetch from "./components/CategoryFetch";

function App() {
  const [input_data, setInput_data] = useState("");
  const [btn_data, setBtn_data] = useState("");
  const [data_grabber, setData_grabber] = useState([]);

  const [loader, setLoader] = useState(true);
  const [category_data, setCategory_data] = useState([]);
  const [display, setDisplay] = useState(false);
  const [itemLength, setItemLength] = useState(0);

  const country = "in";

  return (
    <>
      <Navbar
        display={display}
        setDisplay={setDisplay}
        input_data={input_data}
        setInput_data={setInput_data}
        setBtn_data={setBtn_data}
        btn_data={btn_data}
        data_grabber={data_grabber}
        setData_grabber={setData_grabber}
        setLoader={setLoader}
        loader={loader}
        itemLength={itemLength}
        setItemLength={setItemLength}
      />

      {display ? (
        <News news_data={data_grabber} btn_data={btn_data} display={display} />
      ) : (
        <Switch>
          <Route exact path="/">
            <CategoryFetch
              itemLength={itemLength}
              setItemLength={setItemLength}
              display={display}
              category_data={category_data}
              setCategory_data={setCategory_data}
              key="general"
              pagesize={50}
              category="general"
              country={country}
              loader={loader}
              setLoader={setLoader}
            />
          </Route>
          <Route exact path="/business">
            <CategoryFetch
              itemLength={itemLength}
              setItemLength={setItemLength}
              display={display}
              category_data={category_data}
              setCategory_data={setCategory_data}
              key="business"
              pagesize={50}
              category="business"
              country={country}
              setLoader={setLoader}
              loader={loader}
            />
          </Route>
          <Route exact path="/entertainment">
            <CategoryFetch
              itemLength={itemLength}
              setItemLength={setItemLength}
              display={display}
              category_data={category_data}
              setCategory_data={setCategory_data}
              key="entertainment"
              pagesize={50}
              category="entertainment"
              country={country}
              setLoader={setLoader}
              loader={loader}
            />
          </Route>
          <Route exact path="/health">
            <CategoryFetch
              itemLength={itemLength}
              setItemLength={setItemLength}
              display={display}
              category_data={category_data}
              setCategory_data={setCategory_data}
              key="health"
              pagesize={50}
              category="health"
              country={country}
              setLoader={setLoader}
              loader={loader}
            />
          </Route>
          <Route exact path="/science">
            <CategoryFetch
              itemLength={itemLength}
              setItemLength={setItemLength}
              display={display}
              category_data={category_data}
              setCategory_data={setCategory_data}
              key="science"
              pagesize={50}
              category="science"
              country={country}
              setLoader={setLoader}
              loader={loader}
            />
          </Route>
          <Route exact path="/sports">
            <CategoryFetch
              itemLength={itemLength}
              setItemLength={setItemLength}
              display={display}
              category_data={category_data}
              setCategory_data={setCategory_data}
              key="sports"
              pagesize={50}
              category="sports"
              country={country}
              setLoader={setLoader}
              loader={loader}
            />
          </Route>
          <Route exact path="/technology">
            <CategoryFetch
              itemLength={itemLength}
              setItemLength={setItemLength}
              display={display}
              category_data={category_data}
              setCategory_data={setCategory_data}
              key="technology"
              pagesize={50}
              category="technology"
              country={country}
              setLoader={setLoader}
              loader={loader}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

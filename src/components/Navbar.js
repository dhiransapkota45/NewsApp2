import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const onClicker = async (e) => {
    e.preventDefault();
    props.setBtn_data(props.input_data);
    // props.setLoader(true);
    // props.setDhiran(true)
    const link = `https://newsapi.org/v2/everything?q=${props.input_data}&apiKey=c990aa0235da4635997afd1f7459860c`;
      const raw_data = await fetch(link);
      const data = await raw_data.json();
      console.log(data);
      props.setData_grabber(data.articles);
      props.setLoader(false);
      props.setDisplay(true)
  };
  // useEffect(() => {
  //   const fetcher = async () => {
  //     const link = `https://newsapi.org/v2/everything?q=${props.btn_data}&apiKey=c990aa0235da4635997afd1f7459860c`;
  //     const raw_data = await fetch(link);
  //     const data = await raw_data.json();
  //     console.log(data);
  //     props.setData_grabber(data.articles);
  //     props.setLoader(false);
  //     props.setDisplay(true)
  //   };
  //   fetcher();
  // }, [props.btn_data]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={()=>{props.setDisplay(false)}}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" onClick={()=>{props.setDisplay(false)}} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" onClick={()=>{props.setDisplay(false)}}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" onClick={()=>{props.setDisplay(false)}}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" onClick={()=>{props.setDisplay(false)}}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" onClick={()=>{props.setDisplay(false)}}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" onClick={()=>{props.setDisplay(false)}}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" onClick={()=>{props.setDisplay(false)}}>
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                onChange={(e) => props.setInput_data(e.target.value)}
                value={props.input_data}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={onClicker}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

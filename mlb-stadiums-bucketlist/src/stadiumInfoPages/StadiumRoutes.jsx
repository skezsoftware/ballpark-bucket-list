import { Link, Route, Routes } from "react-router-dom";
import Brewers from "./Brewers";
import Angels from "./Angels";

function handleClickMore() {

    return (
      <>
        <div id="teamPageLinks">
            <Link to={"/brewers"}></Link>
            <Link to={"/angels"}></Link>
        </div>

        <div id="teamPageRoutes">
            <Routes>
              <Route path="/brewers" element={<Brewers />} />
              <Route path="/angels" element={<Angels />} />
            </Routes>
        </div>
      </>
    );
  }
  
  export default handleClickMore;
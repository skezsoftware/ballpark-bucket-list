import "./App.css";
import { STADIUM_INFO } from "./stadiumData";
import HandleStadiumCards from "./components/stadiumCards/HandleStadiumCards";

function App() {
  return (
    <>
      <div className="stadiums-grid-container">
        {STADIUM_INFO.map((stadiumItem) => (
          <HandleStadiumCards {...stadiumItem} />
        ))}
      </div>
    </>
  );
}

export default App;

{
  /* <div id="container">
<div id="navbar">
  <Link to={"/"}>Home</Link>
  <Link to={"/mlbstadiums"}>MLB Stadiums</Link>
  <Link to={"/visitedstadiums"}>Visited Stadiums</Link>
  <div>Itinerary</div>
</div>
<div id="main-section">
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/mlbstadiums" element={<HandleStadiumCards />} />
    <Route path="/visitedstadiums" element={<VisitedParks />} />
  </Routes>
</div>
</div>

<div>
<Link to={"/brewers"}></Link>
</div>

<div>
<Routes>
  <Route path="/brewers" element={<Brewers />} />
</Routes>
</div> */
}

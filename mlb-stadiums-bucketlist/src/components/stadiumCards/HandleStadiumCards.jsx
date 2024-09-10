
export default function HandleStadiumCards({
  ballpark,
  teamName,
  division,
  state,
  style={},
  url
}) {
  return (
    <div className="stadium-card" style={{background: style.background || " "}}>
      <div className="img" style={{backgroundImage: `url(${url})`}} ></div>
      <h3>{ballpark}</h3>
      <h4>{teamName}</h4>
      <p>{division}</p>
      <p>{state}</p>
      <button>Find Out More</button>
      <button>Already Visited</button>
    </div>
  );
}



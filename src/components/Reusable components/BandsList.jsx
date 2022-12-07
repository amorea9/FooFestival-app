import BandCard from "./BandCard";
function BandsList() {
  return (
    <div className="bands-list">
      <h1>Monday, July 17th</h1>
      <div className="bands-list-wrapper">
        <BandCard />
        <BandCard />
      </div>
    </div>
  );
}

export default BandsList;

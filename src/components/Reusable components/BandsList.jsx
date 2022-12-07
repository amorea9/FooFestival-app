import BandCard from "./BandCard";
function BandsList() {
  return (
    <div className="bands-list">
      <h2>Monday, July 17th</h2>
      <div className="bands-list-wrapper">
        <BandCard />
        <BandCard />
      </div>
    </div>
  );
}

export default BandsList;

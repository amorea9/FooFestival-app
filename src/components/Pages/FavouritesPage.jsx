import React from "react";

function Favourites(props) {
  return (
    <section className="favourite-page">
      <h1>Your favourites</h1>
      <div className="user-message">
        <h3>Looks like you have no favourites yet!</h3>
        <p>Add your favourites to your favourites list by clicking the heart when browsing the schedule.</p>
      </div>
      {/* <div className="search-nav">
        <input id="searchField" type="text" />
        <img className="search-icon" src={searchIcon} alt="search icon" />
      </div> */}
      {/* <div className="bands-list-wrapper">
        <BandsList scheduledBands={scheduledBands} />
      </div> */}
    </section>
  );
}

export default Favourites;

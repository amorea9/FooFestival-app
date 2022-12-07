import BandPage from "./components/Pages/BandPage";
import FavouritesPage from "./components/Pages/FavouritesPage";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import ProgramPage from "./components/Pages/ProgramPage";
import "./index.scss";

function App() {
  return (
    <div className="layout-wrapper">
      <nav className="top-nav">
        <ul>
          <li>logo here</li>
          <li>FOOFEST</li>
          <li>en/dk</li>
        </ul>
      </nav>
      <nav className="bottom-menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Favourites</a>
          </li>
          <li>
            <a href="">Schedule</a>
          </li>
          <li>
            <a href="">Live now</a>
          </li>
        </ul>
      </nav>
      <LoginPage />
      <LandingPage />
      <ProgramPage />
      <FavouritesPage />
      <BandPage />
    </div>
  );
}

export default App;

import BandPage from "./components/Pages/BandPage";
import FavouritesPage from "./components/Pages/FavouritesPage";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import ProgramPage from "./components/Pages/ProgramPage";
import BottomNav from "./components/Reusable components/BottomNav";
import "./sass/style.scss";

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
      {/* <LoginPage />
      <LandingPage /> */}
      <ProgramPage />
      {/* <FavouritesPage />
      <BandPage /> */}
      <BottomNav />
    </div>
  );
}

export default App;

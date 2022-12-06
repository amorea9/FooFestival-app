import "./index.scss";
import PlayingNow from "./components/PlayingNow";
import Schedule from "./components/Schedule";
import TodaysHeadliners from "./components/TodaysHeadliners";

function App() {
  return (
    <div>
      <nav>
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
      <section>
        <h1> FooFest 2023</h1>
        <h2>17-23 July</h2>
        <p>The best damn festival ever</p>
      </section>
      <PlayingNow />
      <Schedule />
      <TodaysHeadliners />
      <section className="news-section">
        <div>
          <h2>News & Updates</h2>
          <p>Text here</p>
        </div>
        <div>
          <h2>Party safely</h2>
          <p>Text here</p>
        </div>
      </section>
    </div>
  );
}

export default App;

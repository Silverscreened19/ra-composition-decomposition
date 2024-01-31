import "./App.css";
import News from "./components/News/News";
import Banner from "./components/Search/Imgage";
import banner from "./assets/banner.png";
import Search from "./components/Search/Search";
import Widgets from "./components/Widget/Widgets";

function App() {
  return (
    <>
      <header>
        <News />
      </header>
      <main className="main_container">
        <Search />
          <Banner src={banner}/>
        <Widgets/>
      </main>
    </>
  );
}

export default App;

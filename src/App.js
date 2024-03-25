import "./App.css";
import InfiniteScrollDataSource from "./components/Infinite";
import InfiniteScrollData from "./components/InfiniteScroll";
import InfiniteScrollComponent from "./components/InfiniteScrolling";

function App() {
  return (
    <div className="App">
      {/* <InfiniteScrollData /> */}
      {/* <InfiniteScrollComponent /> */}
      <InfiniteScrollDataSource />
    </div>
  );
}

export default App;

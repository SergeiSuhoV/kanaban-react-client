import "./App.scss";
import Header from "./Header";
import Board from "./Board";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Board />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

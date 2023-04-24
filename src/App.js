import Game from "./Game";
import Header from "./Header";
import "./App.css"
import {handleKeyDown} from "./util"
function App() {
  return (
    <div className="App" onKeyDown={(event) => handleKeyDown(event.key)}>
      <Header/>
      <Game />
    </div>
  );
}

export default App;

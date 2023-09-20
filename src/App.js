import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { store } from "./Redux/store";

function App() {
  const [reload, setReload] = useState(false);
  store.subscribe(() => setReload((prev) => !prev));
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;

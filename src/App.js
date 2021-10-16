import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import data from "./utils/store";
import Store from "./utils/store";

function App() {
  const [data, setData] = useState(Store);
  console.log(data);
  return (
    <div className="App">
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} />;
      })}
    </div>
  );
}

export default App;

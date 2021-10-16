import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import List from "./components/List/List";
import StoreApi from "./utils/storeApi";
import Store from "./utils/store";

function App() {
  const [data, setData] = useState(Store);
  const addCardToList = (title, listId, tags) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  return (
    <StoreApi.Provider value={{ addCardToList }}>
      <div className="App">
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
      </div>
    </StoreApi.Provider>
  );
}

export default App;

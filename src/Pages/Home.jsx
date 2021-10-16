import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { v4 as uuid } from "uuid";
import List from "../components/List/List";
import Navbar from "../components/Navbar/Navbar";
import StoreApi from "../utils/storeApi";
import Store from "../utils/store";
import InputContainer from "../components/Input/InputContainer";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Home() {
  const classes = useStyle();
  const [data, setData] = useState(Store);

  // add card to a list
  const addCardToList = (title, listId, tags) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
      tags,
    };
    console.log(newCard);
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

  // add a new list
  const addList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  console.log("Updated data", data);
  return (
    <StoreApi.Provider value={{ addCardToList, addList }}>
      <Navbar />
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
        <InputContainer type="list" />
      </div>
    </StoreApi.Provider>
  );
}

export default Home;

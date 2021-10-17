import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { v4 as uuid } from "uuid";
import List from "../components/List/List";
import Navbar from "../components/Navbar/Navbar";
import StoreApi from "../utils/storeApi";
import Store from "../utils/store";
import InputContainer from "../components/Input/InputContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { Card } from "@mui/material";

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

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(
      "Destination",
      destination,
      "|",
      "Source",
      source,
      "|",
      "DraggableId",
      draggableId
    );
    if (!destination) {
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList?.cards?.filter(
      (card) => card.id === draggableId
    )[0];
    console.log("Dragging card", draggingCard);
    if (source.droppableId === destination.droppableId) {
      sourceList?.cards?.splice(source.index, 1);
      destinationList?.cards?.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    } else {
      sourceList?.cards?.splice(source.index, 1);
      destinationList?.cards?.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <StoreApi.Provider value={{ addCardToList, addList }}>
      <Navbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.root}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />;
          })}
          <InputContainer type="list" />
        </div>
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export default Home;

import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { v4 as uuid } from "uuid";
import List from "../components/List/List";
import Navbar from "../components/Navbar/Navbar";
import StoreApi from "../utils/storeApi";
import { DragDropContext } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Home() {
  const classes = useStyle();
  const [data, setData] = useState({
    lists: {},
  });

  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("data")));
    console.log("Data", data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // add card to a list
  const addCardToList = (title, listId, tags, name) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
      tags,
      name,
    };
    console.log("New Card", newCard);
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    setData({
      lists: {
        ...data.lists,
        [listId]: list,
      },
    });
  };

  // add a new list
  const addList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    console.log({ [newListId]: newList });
    setData({
      lists: { ...data.lists, [newListId]: newList },
    });
  };
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

  const deleteCard = (listId, cardId) => {
    const updatedCards = data.lists[listId].cards.filter(
      (item) => item.id !== cardId
    );

    setData({
      lists: {
        ...data.lists,
        [listId]: {
          ...data.lists[listId],
          cards: updatedCards,
        },
      },
    });
  };

  const deleteList = (id) => {
    console.log("id ==>> ", id);

    const updatedLists = { ...data.lists };

    delete updatedLists[id];

    console.log("updatesLists ==>> ", updatedLists);

    setData({
      lists: updatedLists,
    });
  };
  return (
    <StoreApi.Provider value={{ addCardToList, addList }}>
      <Navbar addList={addList} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.root}>
          {Object.entries(data.lists).map((item) => {
            // const list = data.lists[listId];
            return (
              <List
                list={item[1]}
                key={item[0]}
                deleteCard={deleteCard}
                deleteList={deleteList}
              />
            );
          })}
          {/* <InputContainer type="list" /> */}
        </div>
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export default Home;

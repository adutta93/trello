import React from "react";
import { Paper, CssBaseline } from "@mui/material/";
import { makeStyles } from "@mui/styles";

import Title from "../Title/Title";
import Card from "../Card/Card";
import InputContainer from "../Input/InputContainer";
import { Droppable } from "react-beautiful-dnd";
import CloseIcon from "@mui/icons-material/Close";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    // height: "35px",
    backgroundColor: "#F3F7F8",
    marginLeft: "2rem",
    marginTop: "2rem",
  },
  title: {
    fontSize: "1.5rem",
  },
  iconGroup: { display: "flex" },
  icon: { marginTop: "1.5rem", marginLeft: "7rem" },
  classContainer: {
    marginTop: "2rem",
  },
}));
const List = ({ list, deleteCard, deleteList, addCardToList, addList }) => {
  const classes = useStyle();
  console.log("list title==>> ", list.title);
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />

        <div className={classes.iconGroup}>
          <Title title={list.title} />
          <CloseIcon
            onClick={() => deleteList(list.id)}
            className={classes.icon}
          />
        </div>
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={classes.classContainer}
            >
              {list.cards.map((card, index) => {
                // console.log("card ==>> ", card);
                return (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                    deleteCard={deleteCard}
                    listId={list.id}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div>
          <InputContainer
            listId={list.id}
            type="card"
            addCardToList={addCardToList}
            addList={addList}
          />
        </div>
      </Paper>
    </div>
  );
};

export default List;

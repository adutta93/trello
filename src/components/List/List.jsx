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
  icon: { display: "flex" },
  classContainer: {
    marginTop: "2rem",
  },
}));
const List = ({ list, deleteCard, deleteList }) => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />

        <div className={classes.icon}>
          <Title title={list.title} />
          <CloseIcon onClick={() => deleteList(list.id)} />
        </div>
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={classes.classContainer}
            >
              {list.cards.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  deleteCard={deleteCard}
                  listId={list.id}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div>
          <InputContainer listId={list.id} type="card" />
        </div>
      </Paper>
    </div>
  );
};

export default List;

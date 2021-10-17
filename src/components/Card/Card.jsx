import React from "react";
import { Paper, Chip } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Draggable } from "react-beautiful-dnd";
import ChipCard from "./ChipCard/ChipCard";

const tagColor = (tag) => {
  let finalTag = tag.toUpperCase().trim();
  console.log(finalTag);
  return finalTag === "DESIGN TEAM"
    ? "primary"
    : finalTag === "COPY REQUEST"
    ? "secondary"
    : finalTag === "HELP"
    ? "error"
    : finalTag === "PRIORITY 1"
    ? "info"
    : finalTag === "PRIORITY 2"
    ? "success"
    : "warning";
};

const useStyle = makeStyles((theme) => ({
  card: {
    padding: ".6rem",
    margin: "1rem",
    // boxShadow: "5px 4px 8px 5px",
  },
  btn: {
    marginRight: ".5rem",
    marginTop: ".2rem",
  },
  title: {
    fontSize: "1.1rem",
    marginTop: ".5rem",
    fontWeight: "bold",
  },
  icon: {
    marginLeft: "14rem",
    marginTop: "-1.5rem",
  },
}));

const Card = ({ card, index, deleteCard, listId }) => {
  const classes = useStyle();
  const allTags = card?.tags?.split(",");

  // console.log("Tags color", allTags);
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.card}>
            <div>
              {allTags?.map((tag) => {
                console.log("Tag color", tagColor(tag));
                return (
                  <Chip
                    label={tag.toUpperCase()}
                    color={tagColor(tag)}
                    className={classes.btn}
                  />
                );
              })}
            </div>
            <div className={classes.title}>{card.title}</div>
            <div className={classes.icon}>
              <DeleteOutlineIcon
                color="error"
                onClick={() => deleteCard(listId, card.id)}
              />
            </div>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default Card;

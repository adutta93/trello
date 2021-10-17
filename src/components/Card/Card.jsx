import React from "react";
import { Paper, Chip, Avatar } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Draggable } from "react-beautiful-dnd";

const tagColor = (tag) => {
  let finalTag = tag.toUpperCase().trim();
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
    padding: "1rem",
    margin: "1rem",
    // boxShadow: "5px 4px 8px 5px",
  },
  btn: {
    marginRight: ".5rem",
    marginTop: ".2rem",
  },
  title: {
    fontSize: "1.1rem",
    marginTop: "2rem",
    fontWeight: "bold",
  },
  icon: {
    marginLeft: "14rem",
    marginTop: "-1.8rem",
  },
  nameInit: {
    marginLeft: "-.2rem",
    marginTop: "1.5rem",
  },
}));

const Card = ({ card, index, deleteCard, listId }) => {
  const classes = useStyle();
  const allTags = card?.tags?.split(",");
  const nameInitials = card.name
    ?.split(" ")
    .map((n) => n[0])
    .join("");

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
              {allTags?.map((tag, index) => {
                return (
                  <Chip
                    key={`${index}-${tag}`}
                    label={tag.toUpperCase()}
                    color={tagColor(tag)}
                    className={classes.btn}
                    size="small"
                  />
                );
              })}
            </div>
            <div className={classes.title}>{card.title}</div>
            <div>
              <Avatar className={classes.nameInit}>
                {nameInitials ? nameInitials : "N/A"}
              </Avatar>
            </div>
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

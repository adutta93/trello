import React, { useState } from "react";
import { Paper, Chip, Avatar } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import { Draggable } from "react-beautiful-dnd";
import { IoTrashOutline } from "react-icons/io5";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

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
    : finalTag === "UI"
    ? "success"
    : "warning";
};

const useStyle = makeStyles((theme) => ({
  card: {
    padding: "1rem",
    margin: "1rem",
    backgroundColor: "#F3F7F8",
  },
  btn: {
    marginRight: ".5rem",
    marginTop: ".2rem",
  },
  title: {
    fontSize: "1rem",
    marginTop: "1rem",
    marginBottom: "-.5rem",

    fontWeight: "bold",
  },
  icon: {
    marginLeft: "11rem",
    marginTop: ".5rem",
    display: "flex",
  },
  nameInit: {
    marginLeft: "-.2rem",
    marginTop: "1.5rem",
    marginBottom: "-2rem",
  },
}));

const Card = ({ card, index, deleteCard, listId }) => {
  const classes = useStyle();
  const [btn, setBtn] = useState(true);
  const allTags = card?.tags?.split(",");
  // const nameInitials = card.name
  //   ?.split(" ")
  //   .map((n) => n[0])
  //   .join("");
  let randNum = Math.floor(Math.random() * 10 + 1);

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper
            className={classes.card}
            elevation={3}
            sx={{
              backgroundColor: "rgb(255,255,255, .25)",
              boxShadow: "0 4px 15px gainsboro",
            }}
          >
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
              <Avatar
                className={classes.nameInit}
                src={`https://randomuser.me/api/portraits/thumb/men/${randNum}.jpg`}
                sx={{ width: 30, height: 30 }}
              />
            </div>
            <div className={classes.icon}>
              <IoTrashOutline
                color="error"
                onClick={() => deleteCard(listId, card.id)}
                sx={{ marginTop: ".5rem" }}
              />
              <div>
                {btn ? (
                  <BookmarkBorderIcon
                    sx={{
                      marginTop: "-.2rem",
                      marginLeft: ".8rem",
                      fontSize: "1.2rem",
                    }}
                    onClick={() => setBtn(!btn)}
                  />
                ) : (
                  <BookmarkIcon
                    sx={{
                      marginTop: "-.2rem",
                      marginLeft: ".8rem",
                      fontSize: "1.2rem",
                      color: "#fcba03",
                    }}
                    onClick={() => setBtn(!btn)}
                  />
                )}
              </div>
            </div>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default Card;

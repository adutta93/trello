import React from "react";
import { Paper, Chip } from "@mui/material/";
import { makeStyles } from "@mui/styles";

const tagColor = (tag) => {
  let finalTag = tag.toUpperCase();
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
    boxShadow: "5px 4px 8px 5px",
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
}));

const Card = ({ card }) => {
  const classes = useStyle();
  const allTags = card.tags.split(",");
  console.log("Tags", allTags);
  return (
    <div>
      <Paper className={classes.card}>
        <div>
          {allTags.map((tag) => (
            <Chip
              label={tag.toUpperCase()}
              color={tagColor(tag)}
              className={classes.btn}
            />
          ))}
        </div>
        <div className={classes.title}>{card.title}</div>
      </Paper>
    </div>
  );
};

export default Card;

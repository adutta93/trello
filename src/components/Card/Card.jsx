import React from "react";
import { Paper } from "@mui/material/";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: ".6rem",
    margin: "1rem",
    boxShadow: "5px 4px 8px 5px",
  },
}));

const Card = () => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.card}>This is a card</Paper>
    </div>
  );
};

export default Card;

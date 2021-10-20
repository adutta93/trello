import React, { useState } from "react";
import { Paper, Typography, Collapse } from "@mui/material/";
import { makeStyles } from "@mui/styles";

import CardInput from "./CardInput";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  addCard: {
    padding: ".7rem",
    margin: "1rem",
    backgroundColor: "#d6d6d6",
    "&:hover": {
      backgroundColor: "#d6d6d6",
    },
    cursor: "pointer",
  },
}));

const InputContainer = ({ listId, type, addCardToList, addList }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <CardInput
          setOpen={setOpen}
          listId={listId}
          type={type}
          addCardToList={addCardToList}
          addList={addList}
        />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+ Add another card" : "+ Add another list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContainer;

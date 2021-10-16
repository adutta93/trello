import React, { useState } from "react";
import { Paper, Typography, Collapse } from "@mui/material/";
import { makeStyles } from "@mui/styles";

import CardInput from "./CardInput";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  addCard: {
    padding: ".7rem",
    margin: "1rem",
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: "#b1b2b5",
    },
  },
}));

const InputContainer = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <CardInput setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>+ Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContainer;

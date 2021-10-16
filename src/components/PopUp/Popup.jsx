import React, { useContext, useState } from "react";
import { Paper, InputBase, Button } from "@mui/material/";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  card: {
    padding: ".5rem",
    margin: "1rem",
    width: "300px",
    height: "50px",
    background: "white",
  },

  btn: {
    margin: "1rem",
  },
}));

const Popup = ({ setModalOpen }) => {
  const classes = useStyle();

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            fullWidth
            placeholder="Enter the list title"
            inputProps={{
              className: classes.input,
            }}
          />
        </Paper>
      </div>
      <div className={classes.btn}>
        <Button size="medium" variant="contained" onClick={setModalOpen(true)}>
          Add List
        </Button>
      </div>
    </div>
  );
};

export default Popup;

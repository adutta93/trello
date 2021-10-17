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

const Popup = ({ setModalOpen, addList }) => {
  const classes = useStyle();

  const [input, setInput] = useState("");

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
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </Paper>
      </div>
      <div className={classes.btn}>
        <Button
          size="medium"
          variant="contained"
          onClick={() => {
            addList(input);
            setModalOpen(false);
          }}
        >
          Add List
        </Button>
      </div>
    </div>
  );
};

export default Popup;

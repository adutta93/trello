import React from "react";
import { Paper, InputBase, Button } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: "1rem",
    margin: "1rem",
    height: "50px",
  },
  tags: {
    paddingLeft: "1rem",
    margin: "1rem",
  },
  btn: {
    margin: "1rem",
  },
  icon: {
    marginLeft: "1rem",
    cursor: "pointer",
  },
  input: {
    margin: "1rem",
  },
}));

const CardInput = ({ setOpen }) => {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            fullWidth
            rows={4}
            onBlur={() => setOpen(false)}
            placeholder="Enter the title"
            inputProps={{
              className: classes.input,
            }}
          />
        </Paper>
        <Paper className={classes.tags}>
          <InputBase fullWidth placeholder="Tags" />
        </Paper>
      </div>
      <div className={classes.btn}>
        <Button
          size="medium"
          variant="contained"
          onClick={() => {
            setOpen();
          }}
        >
          Add Card
        </Button>
        <ClearIcon
          className={classes.icon}
          onClick={() => {
            setOpen();
          }}
        />
      </div>
    </div>
  );
};

export default CardInput;

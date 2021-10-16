import React from "react";
import { Paper, CssBaseline } from "@mui/material/";
import { makeStyles } from "@mui/styles";

import Title from "../Title/Title";
import Card from "../Card/Card";
import InputContainer from "../Input/InputContainer";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    // height: "35px",
    backgroundColor: "#F3F7F8",
    marginLeft: "2rem",
    marginTop: "2rem",
  },
}));
const List = () => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title />
        <Card />
        <Card />
        <div>
          <InputContainer />
        </div>
      </Paper>
    </div>
  );
};

export default List;

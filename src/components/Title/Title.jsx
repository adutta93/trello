import React, { useState } from "react";
import { Typography, InputBase } from "@mui/material/";
import { MoreHoriz } from "@mui/icons-material/";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    // margin: "1.2rem",
    display: "flex",
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginLeft: "1rem",
  },
  input: {
    // marginTop: "1.2rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:focus": {
      background: "#ddd",
    },
  },
}));

const Title = ({ title }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value={title}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
          <MoreHoriz />
        </div>
      )}
    </div>
  );
};

export default Title;

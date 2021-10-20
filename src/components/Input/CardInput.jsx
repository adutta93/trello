import React, { useState } from "react";
import {
  Paper,
  InputBase,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material/";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import assignee from "../../utils/Assigne";
import Swal from "sweetalert2";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: ".5rem",
    margin: "1rem",
  },
  tags: {
    padding: ".5rem",
    margin: "1rem",
  },
  assign: {
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
}));

const CardInput = ({ setOpen, listId, type, addCardToList, addList }) => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [cardTags, setCardTags] = useState("");
  const [name, setName] = useState("");

  const handleChangeCard = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeTags = (e) => {
    setCardTags(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleCardAdd = () => {
    if (type === "card") {
      addCardToList(title, listId, cardTags, name);
      setTitle("");
      setCardTags("");
      setOpen();
    } else {
      addList(title);
      setTitle("");
      setOpen();
    }
  };
  return (
    <div>
      <div>
        <Paper
          className={classes.card}
          sx={{
            backgroundColor: "rgb(255,255,255, .25)",
            boxShadow: "0 4px 8px gainsboro",
          }}
        >
          <InputBase
            onChange={handleChangeCard}
            multiline
            fullWidth
            placeholder={type === "card" ? "Enter the title" : "Enter the list"}
            value={title}
            inputProps={{
              className: classes.input,
            }}
          />
        </Paper>
        {type === "card" ? (
          <Paper
            className={classes.tags}
            sx={{
              backgroundColor: "rgb(255,255,255, .25)",
              boxShadow: "0 4px 8px gainsboro",
            }}
          >
            <InputBase
              onChange={handleChangeTags}
              multiline
              fullWidth
              placeholder="Tags"
              value={cardTags}
              inputProps={{
                className: classes.input,
              }}
            />
          </Paper>
        ) : (
          ""
        )}
        {type === "card" ? (
          <Box sx={{ maxWidth: 269, marginLeft: 1.9, marginBottom: 1.4 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label="Assignee<"
                onChange={handleChangeName}
                sx={{
                  backgroundColor: "rgb(255,255,255, .25)",
                  boxShadow: "0 4px 8px gainsboro",
                }}
              >
                {assignee.map((item, index) => (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : (
          " "
        )}
      </div>
      <div className={classes.btn}>
        <Button
          size="medium"
          variant="contained"
          onClick={handleCardAdd}
          sx={{
            marginBottom: ".65rem",
          }}
        >
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <ClearIcon
          className={classes.icon}
          onClick={() => {
            setOpen();
          }}
          sx={{
            // backgroundColor: "rgb(255,255,255, .25)",
            backgroundColor: "#F3F7F8",
            boxShadow: "0 4px 8px gainsboro",
            marginTop: ".3rem",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default CardInput;

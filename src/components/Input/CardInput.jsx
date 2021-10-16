import React, { useContext, useState } from "react";
import { Paper, InputBase, Button } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: ".5rem",
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
  // input: {
  //   margin: "1rem",
  // },
}));

const CardInput = ({ setOpen, listId, type }) => {
  const classes = useStyle();
  const { addCardToList, addList } = useContext(storeApi);
  const [title, setTitle] = useState("");
  const [cardTags, setCardTags] = useState("");

  const handleChangeCard = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeTags = (e) => {
    setCardTags(e.target.value);
  };

  const handleCardAdd = () => {
    if (type === "card") {
      addCardToList(title, listId, cardTags);
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
        <Paper className={classes.card}>
          <InputBase
            onChange={handleChangeCard}
            multiline
            fullWidth
            // rows={4}
            // onBlur={() => setOpen(false)}
            placeholder={type === "card" ? "Enter the title" : "Enter the list"}
            value={title}
            inputProps={{
              className: classes.input,
            }}
          />
        </Paper>
        {type === "card" ? (
          <Paper className={classes.tags}>
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
      </div>
      <div className={classes.btn}>
        <Button size="medium" variant="contained" onClick={handleCardAdd}>
          {type === "card" ? "Add Card" : "Add List"}
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

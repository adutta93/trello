import React from "react";
import { makeStyles } from "@mui/styles";
import "./ChipCard.css";
const tagColor = (tag) => {
  let finalTag = tag.toUpperCase();
  return finalTag === "DESIGN TEAM"
    ? "primary"
    : finalTag === "COPY REQUEST"
    ? "secondary"
    : finalTag === "HELP"
    ? "error"
    : finalTag === "PRIORITY 1"
    ? "info"
    : finalTag === "PRIORITY 2"
    ? "success"
    : "warning";
};

// const useStyle = makeStyles((theme) => ({
//   chipContainer: {
//     display: "flex",
//   },
// }));

const ChipCard = ({ label, color }) => {
  //   const classes = useStyle();
  return (
    <div id="chipContainer">
      <div>{label}</div>
    </div>
  );
};

export default ChipCard;

import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Avatar, AvatarGroup } from "@mui/material";

import Popup from "../PopUp/Popup";

import assignee from "../../utils/Assigne";
import "./Nav.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderradius: 5,
};

const Navbar = ({ addList }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleChange = () => setModalOpen(!modalOpen);
  return (
    <div className="nav">
      <div className="logo">PROJECT MANAGEMENT</div>
      <div className="avatar-grp">
        <AvatarGroup max={5}>
          {assignee.map((item, index) => (
            <Avatar alt={item.name} src={item.img} />
          ))}
        </AvatarGroup>
      </div>
      <nav className="nav-links">
        <ul>
          {/* <li className="star">
            <a href="#">
              <StarBorderIcon />
            </a>
          </li> */}
          <li className="calender">
            <a href="#">Calender</a>
          </li>
          <li>
            <a href="#">Public</a>
          </li>
        </ul>
      </nav>
      <a className="bucket" href="#">
        <button onClick={handleChange}>
          <span className="add-btn-logo">+</span> New Bucket
        </button>
      </a>

      <Modal
        open={modalOpen}
        onClose={handleChange}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {" "}
          <Popup setModalOpen={setModalOpen} addList={addList} />
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;

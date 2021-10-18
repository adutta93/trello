/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

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
      <div className="logo">Project Management</div>
      <div className="avatar-grp">
        {assignee.map((item, index) => (
          <Avatar
            alt={item.name}
            src={`https://randomuser.me/api/portraits/thumb/men/${index}.jpg`}
            key={index}
            style={{ marginLeft: ".4rem" }}
          />
        ))}
      </div>
      <nav className="nav-links">
        <ul>
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

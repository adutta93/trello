/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PublicIcon from "@mui/icons-material/Public";

import { BiCalendar } from "react-icons/bi";

import Popup from "../PopUp/Popup";
import assignee from "../../utils/Assigne";
import "./Nav.css";
import { IconContext } from "react-icons/lib";

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
    <IconContext.Provider value={{ size: "1.4rem" }}>
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
            <button className="starBtn">
              <StarBorderIcon style={{ marginTop: ".1rem" }} />
            </button>
            <button className="calendarBtn">
              <div style={{ marginTop: ".18rem" }}>
                <BiCalendar style={{ marginRight: ".5rem" }} />
              </div>
              <div style={{ marginTop: ".17rem" }}>Calendar</div>
            </button>
            <button className="publicBtn">
              {" "}
              <div style={{ marginTop: ".1rem" }}>
                <PublicIcon
                  style={{ marginRight: ".5rem", marginLeft: ".1rem" }}
                />
              </div>
              <div style={{ marginTop: ".17rem" }}>Public</div>
            </button>
          </ul>
        </nav>
        <a className="bucket" href="#">
          <button className="add-btn" onClick={handleChange}>
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
    </IconContext.Provider>
  );
};

export default Navbar;

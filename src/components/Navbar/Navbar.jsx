/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PublicIcon from "@mui/icons-material/Public";
import DateRangeIcon from "@mui/icons-material/DateRange";

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
          <li>
            <Button
              startIcon={
                <StarBorderIcon
                  sx={{ marginLeft: ".7rem", fontSize: "medium" }}
                />
              }
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                padding: "7.5px",
              }}
            />
          </li>
          <li className="calender">
            <Button
              variant="outlined"
              startIcon={<DateRangeIcon />}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
              }}
            >
              Calender
            </Button>
          </li>
          <li>
            <Button
              variant="outlined"
              startIcon={<PublicIcon />}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
              }}
            >
              Public
            </Button>
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

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SignUp from "./Signup";
import Login from "./Login";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>{location.pathname === "/login" ? <Login /> : <SignUp />}</Box>
      </Modal>
    </div>
  );
}

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material";

//styles

const StyledMenuItems = styled(MenuItem)`
  display: flex;
  font-size: 14px;
  color: white;
  &:hover {
    background-color: orange;
  }
`;
const HeaderMenu = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <MoreVert
        onClick={handleClick}
        style={{ marginLeft: "10px", cursor: "pointer", color: "#919191" }}
      />
      <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            backgroundColor: "#034c53",
          },
        }}
      >
        <StyledMenuItems onClick={handleClose}>My account</StyledMenuItems>
        <StyledMenuItems onClick={handleClose}>Logout</StyledMenuItems>
      </Menu>
    </>
  );
};

export default HeaderMenu;

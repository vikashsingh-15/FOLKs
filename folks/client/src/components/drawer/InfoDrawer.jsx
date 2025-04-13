import React from "react";
import { Popover, Box, styled, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//components
import Proile from "./Profile";

//styled components

const StyledPopover = styled(Popover)`
  & .MuiPopover-paper {
    background-color: #ff6a20;
    color: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    height: 75%;
    width: 300px;
  }
`;

const StyledProfileBackBox = styled(Box)`
  background-color: #0d253a;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: left;
  cursor: pointer;
  gap: 10px;
`;

const StyledProfileBox = styled(Box)`
  //   background-color: #4f959d;
  //   height: 90%;
`;

const InfoDrawer = ({ openDrawer, anchorEl, setOpenDrawer }) => {
  const handleClose = () => setOpenDrawer(false);

  return (
    <StyledPopover
      open={openDrawer}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        // horizontal: "left",
      }}
      transitionDuration={100} // in ms
      //   PaperProps={{
      //     sx: {
      //       width: 300,
      //       height: 400,
      //       backgroundColor: "#0d253a",
      //       color: "#fff",
      //       borderRadius: "12px",
      //       padding: "16px",
      //       boxShadow: 6,
      //     },
      //   }}
    >
      <StyledProfileBackBox>
        <ArrowBackIcon onClick={() => setOpenDrawer(false)} />
        <Typography>Proile</Typography>
      </StyledProfileBackBox>
      <StyledProfileBox>
        <Proile />
      </StyledProfileBox>
    </StyledPopover>
  );
};

export default InfoDrawer;

//
//
//
//
//
//
//
//

////way 2 use of Drawer

// import { Drawer } from "@mui/material";
// import { styled } from "@mui/material";

// //styles

// const StyledDrawer = styled(Drawer)`
//   width: 300px;
//   flex-shrink: 0;
//   & .MuiDrawer-paper {
//     width: 300px;
//     background-color: #0d253a;
//     color: white;
//     border-radius: 0 0 0 0;
//     padding: 20px;
//     top: 70px;
//     height: 85%;
//     // height: calc(100% - 100px);
//     left: 20px;
//   }
// `;

// const InfoDrawer = ({ open, setOpen }) => {
//   return (
//     <StyledDrawer
//       open={open}
//       onClose={() => setOpen(false)}
//       style={{ zIndex: 1500 }}
//     >
//       hellow
//     </StyledDrawer>
//   );
// };
// export default InfoDrawer;

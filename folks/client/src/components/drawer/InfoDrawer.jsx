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

////way 2

import React from "react";
import { Popover, Box } from "@mui/material";

const InfoDrawer = ({ open, anchorEl, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      PaperProps={{
        sx: {
          width: 300,
          height: 400,
          backgroundColor: "#0d253a",
          color: "#fff",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: 6,
        },
      }}
    >
      <Box>
        <h3 style={{ margin: 0 }}>User Info</h3>
        <p>This is your custom popover drawer content.</p>
      </Box>
    </Popover>
  );
};

export default InfoDrawer;

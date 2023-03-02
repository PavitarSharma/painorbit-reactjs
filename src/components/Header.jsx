import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { UserState } from "../context/UserContext";

const Header = ({ title }) => {
  const { userDetails } = UserState();

  return (
    <Box
      sx={{
        padding: "40px 0",
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="20px"
      >
        <Typography sx={{ fontSize: "34px", color: "#777", fontWeight: "700" }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
            }}
          >
            <img
              src={userDetails.profilepicture}
              alt={userDetails.name}
              className="user_image"
            />
          </Box>
          <Typography sx={{ color: "#555", fontSize: "20px"}}>{userDetails.name}</Typography>
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};

export default Header;

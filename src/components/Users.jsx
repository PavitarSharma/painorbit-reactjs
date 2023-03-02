import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { UserState } from "../context/UserContext";

const Users = () => {
  const { users } = UserState();
  return (

      <Box
        sx={{
          padding: "20px",
          height: "450px",
          overflowY: "auto",
          borderRadius: "4px"
        }}
        className="user_container"
      >
        {users &&
          users.map((user) => {
            return (
              <Link to={`/user/${user.id}`} key={user.id}>
                <Stack
                  direction="row"
                  alignItems="center"
                  gap="14px"
                  sx={{ paddingBottom: "10px" }}
                >
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <img
                      src={user.profilepicture}
                      alt={user.name}
                      className="user_image"
                    />
                  </Box>
                  <Typography variant="p" sx={{ color: "#333"}}>{user.name}</Typography>
                </Stack>
                <Divider sx={{ marginBottom: "10px" }} />
              </Link>
            );
          })}
      </Box>
 
  );
};

export default Users;

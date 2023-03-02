import { Box, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { UserState } from "../context/UserContext";
import Gallery from "./Gallery";
import Posts from "./Posts";
import Todo from "./Todo";
import UserProfile from "./UserProfile";

const pages = {
  0: UserProfile,
  1: Posts,
  2: Gallery,
  3: Todo,
};
const Profile = () => {
  const { id } = useParams();
  const { users, fetchSingleUser, userDetails } = UserState();
  const [open, setOpen] = useState(true);
  const [clickedId, setClickedId] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetchSingleUser(id);
  }, [id, users]);

  const GetPages = pages[page];
  return (
    <Box sx={{
      hight: "100vh",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      scrollBehavior: "smooth"
    }}>
      <Stack
        direction="row"
        gap="20px"
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
          borderRadius: "34px",
          width: "90%",
          marginLeft:"auto",
          marginRight: "auto",
          marginTop: "5rem",
          marginBottom: "5rem",
          height: "100vh"
        }}
      >
        <Box
          sx={{
            width: open ? "18rem" : "5rem",
            background:
              "linear-gradient(180deg, rgba(52,7,244,1) 16%, rgba(43,26,246,1) 55%, rgba(99,2,249,1) 97%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            borderRadius: "34px",
          }}
        >
          <Sidebar
            clickedId={clickedId}
            setClickedId={setClickedId}
            open={open}
            setOpen={setOpen}
            setPage={setPage}
          />
        </Box>
        <Box sx={{ flex: 1, padding: "0 20px" }}>
          <GetPages />
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;

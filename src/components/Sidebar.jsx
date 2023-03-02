import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CollectionsIcon from "@mui/icons-material/Collections";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const menus = [
  { title: "Profile", icon: <AccountCircleIcon /> },
  { title: "Posts", icon: <PostAddIcon /> },
  { title: "Gallery", icon: <CollectionsIcon /> },
  { title: "ToDo", icon: <ListAltIcon /> },
];
const Sidebar = ({ open, setOpen, clickedId, setClickedId, setPage }) => {
  return (
    <>
      {menus.map((menu, index) => {
        return (
          <Box
            key={index}
            sx={{
              width: "100%",
              position: "relative",
           
            }}
          >
            {clickedId === index ? (
              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  backgroundColor: "#fff",
                  width: open ? "30px" : "20px",
                  height: "100%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderTopLeftRadius: "40px",
                  borderBottomLeftRadius: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronRightIcon
                  onClick={() => setOpen(!open)}
                  sx={{
                    fontSize: "30px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
                    borderRadius: "50%",
                    color: "gray",
                  }}
                />
              </Box>
            ) : null}
            <Link to={menu.path}>
              <Box
                sx={{
                  padding: open && "0 40px",
                  color: clickedId === index ? "white" : "#999",
                }}
                onClick={() => {
                  setClickedId(index);
                  setPage(index);
                }}
              >
                {open ? (
                  <Typography
                    sx={{
                      fontSize: "20px",
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                  >
                    {menu.title}
                  </Typography>
                ) : (
                  <Box sx={{ textAlign: "center", marginRight: "10px" }}>
                    {menu.icon}
                  </Box>
                )}

                <Divider />
              </Box>
            </Link>
          </Box>
        );
      })}
    </>
  );
};

export default Sidebar;

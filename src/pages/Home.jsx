import React from 'react'
import axios from "axios"
import { Box, Stack, Typography } from "@mui/material"
import Users from '../components/Users'


const Home = () => {
    
  return (
    <Box>
        <Box sx={{
            maxWidth: "600px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5rem",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
            borderRadius: "34px",
            border: "none"
        }}>
            <Stack>
                <Typography variant='p' sx={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#444",
                    background: "#fbf8f8",
                    padding: "40px 0"
                }}>Select an account</Typography>
                <Users />
            </Stack>
        </Box>
    </Box>
  )
}

export default Home
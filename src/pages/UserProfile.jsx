import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import UserDetails from "../components/UserDetails";
import { UserState } from "../context/UserContext";

const UserProfile = () => {
  const { userDetails } = UserState();
  return (
    <>
      <Header title="Profile" />

      <Stack direction="row">
        {/* Left */}
        <Box>
          {/* Upper */}
          <Stack alignItems="center">
            <Box margin="20px 0">
              <Box
                sx={{
                  width: "250px",
                  height: "250px",
                }}
              >
                <img
                  src={userDetails.profilepicture}
                  alt={userDetails.name}
                  className="user_image"
                />
              </Box>

              <Box marginTop="20px">
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#444",
                    textAlign: "center",
                    marginLeft: "40px",
                  }}
                  variant="p"
                >
                  {userDetails.name}
                </Typography>
              </Box>
            </Box>

            <Box>
              <UserDetails keyName="Username" value={userDetails.username} />
              <UserDetails keyName="e-mail" value={userDetails.email} />
              <UserDetails keyName="Phone" value={userDetails.phone} />
              <UserDetails keyName="Website" value={userDetails.website} />
            </Box>
          </Stack>

          <Divider />
          {/* Down */}

          <Stack alignItems="center">
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                opacity: "0.5",
                textAlign: "center",
                margin: "14px 0",
              }}
            >
              Company
            </Typography>
            <Box>
              <UserDetails keyName="Name" value={userDetails.company.name} />
              <UserDetails
                keyName="catchphrase"
                value={userDetails.company.catchPhrase}
              />
              <UserDetails keyName="bs" value={userDetails.company.bs} />
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            width: "2px",
            height: "650px",
            background: "#999",
            opacity: "0.4",
            margin: "0 80px",
          }}
        ></Box>

        {/* Right */}
        <Box>
          {/* Upper */}
          <Stack>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                opacity: "0.5",
                margin: "14px 0",
              }}
            >
              Address
              <span>&#58;</span>
            </Typography>
            <Box sx={{ marginLeft: "40px" }}>
              <UserDetails
                keyName="Street"
                value={userDetails.address.street}
              />
              <UserDetails keyName="Suite" value={userDetails.address.suite} />
              <UserDetails keyName="City" value={userDetails.address.city} />
              <UserDetails
                keyName="Zipcode"
                value={userDetails.address.zipcode}
              />
            </Box>
          </Stack>

          {/* Down */}

          <Box width="100%" flex="1">
            <Box
              sx={{
                width: "700px",
                height: "300px",
                border: "1px solid black",
                borderRadius: "34px",
              }}
            ></Box>

            <Box sx={{ dispaly: "flex", alignItems: "center", gap: "20px" }}>
              <Typography>
                Lat: <span>{userDetails.address.geo.lat}</span>
              </Typography>
              <Typography>
                Long: <span>{userDetails.address.geo.lng}</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default UserProfile;

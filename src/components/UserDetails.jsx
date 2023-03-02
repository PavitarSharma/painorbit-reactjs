import { Stack, Typography } from "@mui/material";
import React from "react";

const UserDetails = ({ keyName, value }) => {
  return (
    <Stack direction="row" alignItems="center" gap="14px" marginBottom="14px">
      <Typography sx={{ fontSize: "20px", fontWeight: "600", opacity: "0.4", textAlign: "right" }}>
        {keyName}
      </Typography>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "600",
          opacity: "0.4",
        }}
      >
        &#58;
      </span>
      <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#444" }}>
        {value}
      </Typography>
    </Stack>
  );
};

export default UserDetails;

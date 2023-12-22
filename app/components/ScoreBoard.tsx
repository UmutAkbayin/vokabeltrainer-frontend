"use client";

import { Box, Typography } from "@mui/material";

export default function ScoreBoard() {
  return (
    <Box sx={{
      width: "100%",
      backgroundColor: "var(--light-gray)",
      padding: "1.5rem 0",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{
          color: "var(--secondary-color)",
          fontSize: "1.25rem",
          textTransform: "uppercase",
        }}>
          Base
        </Typography>
        <Typography sx={{
          color: "var(--primary-color)",
          fontSize: "2.5rem",
          textAlign: "center",
        }}>
          7
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{
          color: "var(--secondary-color)",
          fontSize: "1.25rem",
          textTransform: "uppercase",
        }}>
          Step 1
        </Typography>
        <Typography sx={{
          color: "var(--primary-color)",
          fontSize: "2.5rem",
          textAlign: "center",
        }}>
          0
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{
          color: "var(--secondary-color)",
          fontSize: "1.25rem",
          textTransform: "uppercase",
        }}>
          Step 2
        </Typography>
        <Typography sx={{
          color: "var(--primary-color)",
          fontSize: "2.5rem",
          textAlign: "center",
        }}>
          0
        </Typography>
      </Box>
<Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{
          color: "var(--secondary-color)",
          fontSize: "1.25rem",
          textTransform: "uppercase",
        }}>
          Done
        </Typography>
        <Typography sx={{
          color: "var(--primary-color)",
          fontSize: "2.5rem",
          textAlign: "center",
        }}>
          0
        </Typography>
      </Box>
    </Box>
  );
}
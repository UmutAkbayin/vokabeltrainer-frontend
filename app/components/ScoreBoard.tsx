"use client";

import { useAppSelector } from "@/app/hooks/reduxHooks"; 
import { useQuery, useQueryClient } from '@tanstack/react-query';
  
import { Box, Typography } from "@mui/material";

export default function ScoreBoard() {
  const status = useAppSelector((state) => state.status.value);
  const queryClient = useQueryClient();

  const baseValue = status === "off" ? 0 : 7;
  const step1Value = status === "off" ? 0 : 7;
  const step2Value = status === "off" ? 0 : 7;
  const doneValue = status === "off" ? 0 : 7;

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
          {baseValue}
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
          {step1Value}
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
          {step2Value}
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
          {doneValue}
        </Typography>
      </Box>
    </Box>
  );
}
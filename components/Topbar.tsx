import { Box, AppBar, Button } from '@mui/material';
import React from 'react';

function Topbar() {
  return (
    <Box sx={{
      marginTop: '1rem',
      display: 'flex',
      gap: '1rem',
    }}>
        <Button
          sx={{
            marginLeft: 'auto',
            backgroundColor: "var(--secondary-light)",
          }}
          variant="contained"
        >
          Sign Up</Button>
        <Button
          variant="contained"
          sx={{
            marginRight: '1rem',
            backgroundColor: "var(--light-gray)",
            color: "var(--primary-color)",
            "&:hover": {
              color: "white",
            }
          }}
        >
          Sign In
        </Button>
    </Box>
  )
}

export default Topbar;
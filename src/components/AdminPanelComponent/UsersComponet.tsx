import { Typography } from '@mui/material'
import React from 'react'

function UsersComponet() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "fixed",
          width: "100%",
          background: "#ffffff",
          padding: "20px 0",
          zIndex: 10,
        }}
      >
        Users List
      </Typography>
      <div style={{ flexGrow: 1, overflowY: "auto", paddingTop: "90px" }}>
        
      </div>
    </div>
  )
}

export default UsersComponet
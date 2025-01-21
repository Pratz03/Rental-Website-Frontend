import { Button } from '@mui/material'
import axios from 'axios';
import React from 'react'

function Home() {
  const handleLogin = () => {
    axios
      .get("http://localhost:5000/test",{
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("accessToken")
        }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Button variant="contained" onClick={(e) => handleLogin()}>
        Test Api
      </Button>
    </div>
  )
}

export default Home
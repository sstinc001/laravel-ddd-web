import {Link} from "react-router-dom"
import {Button} from "@mui/material";
import React from "react";
// import { Box, Button, Container, Grid, TextField } from '@mui/material'

function About() {
  return (
      <>
        <div>
          <h1>About</h1>
        </div>
        <div>
          <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/"
          >
            Homeへ遷移
          </Button>
          <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/regist"
          >
            Registへ遷移
          </Button>
          <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/auth"
          >
            Authへ遷移
          </Button>
        </div>
      </>
  )
}

export default About

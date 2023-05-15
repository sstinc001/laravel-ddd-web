import React, {Fragment, useState } from "react"
import { auth } from '../services/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { FirebaseError } from '@firebase/util'
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Container, Grid, TextField } from "@mui/material"

const Regist: React.FC = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()

  const Register = async (event: any) => {
    event.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
      )
      console.log(userCredential)
      navigate("/about")
    } catch (e) {
      console.log(e)
      // alert(e.message)
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  return (
      <Fragment>
        <Container>
          <Grid container>
            <h2>Regist</h2>
            <Grid item md={12}>
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
                  to="/about"
              >
                Aboutへ遷移
              </Button>
              <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="/auth"
              >
                Authへ遷移
              </Button>
            </Grid>
            <Grid item md={12}>1</Grid>
            <Grid item md={12}>
              <Grid item md={12}>
                register
              </Grid>
              <Box component="form">
                <TextField
                    style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                    name="email"
                    label="E-mail"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      handleChangeEmail(event);
                    }}
                />
                <TextField
                    style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                    name="password"
                    label="Password"
                    fullWidth
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      handleChangePassword(event);
                    }}
                />
                <Button
                    fullWidth
                    style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                    onClick={Register}
                >
                  新規登録
                </Button>
              </Box>
            </Grid>
            <Grid item md={12}>2</Grid>
          </Grid>
        </Container>
      </Fragment>
  )
}

export default Regist
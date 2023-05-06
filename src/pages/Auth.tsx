import React, { Fragment, useState } from "react"
import { auth } from '../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, Link } from "react-router-dom"
import { Box, Button, Container, Grid, TextField } from '@mui/material'

const Auth: React.FC = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()

  /**
   * ログイン
   * note 複製して、中身を書き換えれば、SNSログインも実装可能
   * @param event
   * @constructor
   */
  const Auth = (event: any) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
          navigate("/about")// 登録成功後のリダイレクトページを設定してください。
        })
        .catch((error) => {
          alert(error.message)
          console.error(error)
        })
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
            <h2>Auth</h2>
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
                  to="/regist"
              >
                Registへ遷移
              </Button>
            </Grid>
            <Grid item md={12}>1</Grid>
            <Grid item md={12}>
              <Grid item md={12}>
                ログイン
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
                    onClick={Auth}
                >
                  ログイン
                </Button>
              </Box>
            </Grid>
            <Grid item md={12}>2</Grid>
          </Grid>
        </Container>
      </Fragment>
  )
}

export default Auth
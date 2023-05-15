import {Link} from "react-router-dom"
import {Button} from "@mui/material";

const About = () => {
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

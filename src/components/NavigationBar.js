import { AppBar, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export const NavigationBar = () => {

  return (
    <>
      <div id="navigationDiv">
        <AppBar position="static" color="transparent">
          <Grid2
          container
          spacing={3}
          sx={{ marginRight: {xs: '0px', md: '80px'}, justifyContent: {xs: 'center', md: 'right'}, padding: '15px' }}>
            <Link to="/">
              <Button startIcon={<HomeIcon/>} size="large" variant="text" color="inherit">
                <p>HOME</p>
              </Button>
            </Link>
            <Link to="/projects">
              <Button startIcon={<FormatListNumberedIcon/>} size="large" variant="text" color="inherit">
                <p>PROJECTS</p>
              </Button>
            </Link>
          </Grid2>
        </AppBar>
      </div>
    </>
  );

}

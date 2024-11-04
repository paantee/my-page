import { Avatar, Button, Grid2 } from "@mui/material"
import { handleRedirect } from "./Utils";
import transition from "./Transition";
import profilePicture from './photos/defaultAvatar.jpg';
import linkedinLogo from './photos/linkedinRound.png';
import instagramLogo from './photos/instagram_logo.jpg';

const HomePage = () => {

  return (
    <>
      <div id="homeDiv">
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ marginTop: { xs: '30px', md: '200px' }, marginRight: {xs: '30px', md: '0px'}, marginLeft: {xs: '30px', md: '0px'} }}
          >
            <div id="nameAndDesc" style={{ justifyItems: 'center' }}>
              <div style={{ maxWidth: '375px', minWidth: '300px' }}>
                <h1 style={{ fontSize: '50px' }}>
                  Teemu Paananen
                </h1>
                <p style={{ paddingTop: '10px', paddingLeft: '5px' }}>The purple toaster on my desk has become my greatest confidant. Every morning, it hums softly, as if whispering secrets only I can understand. I once thought about naming it Gerald, but then I realized it's better to let it remain a mysterious, unnamed entity. Yesterday, a squirrel tried to steal my shoe, and I almost let it, just to see where it would take it. In an alternate universe, I imagine we’d have tea together and discuss the meaning of time. But here, I just keep making toast.</p>
              </div>
            </div>
            <div id="socialMediaBar" style={{ paddingTop: '15px', textAlign: 'center' }}>
              <Button onClick={() => handleRedirect('https://fi.linkedin.com/in/teemu-paananen-2a5b76258')}>
                <Avatar
                  src={linkedinLogo}
                  alt="Linkedins logo"
                  sx={{height: '50px', width: '50px'}}
                />
              </Button>
              <Button onClick={() => handleRedirect('https://www.instagram.com/paananenteemu/')}>
                <Avatar
                  src={instagramLogo}
                  alt="Instagrams logo"
                  sx={{height: '50px', width: '50px'}}
                />
              </Button>
            </div>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 5 }}
            sx={{ marginTop: { xs: '30px', md: '170px' } }}
          >
            <div style={{ justifyItems: 'center' }}>
              <img
                src={profilePicture}
                alt="Profile Picture"
                style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '50%' }}
              />
            </div>
          </Grid2>
          <Grid2 size={{ xs: 0, md: 1 }} />
        </Grid2>
        <Grid2 container>
          <Grid2
            size={12}
            sx={{ marginLeft: {xs: '30px', md: '195px'}, marginTop: {xs: '30px', md: '60px'}, marginBottom: {xs: '30px', md: '0px'} }}
          >
            <div id="contactInformation">
              <h1 style={{paddingBottom: '5px'}}>Contact Me</h1>
              <p style={{ color: 'grey' }}>Email Address: teemujuhanip@gmail.com</p>
              <p style={{ color: 'grey' }}>Phone number: 00000000000</p>
            </div>
          </Grid2>
        </Grid2>
      </div>
    </>
  )
}

export default transition(HomePage);
import { Avatar, Button, Grid2 } from "@mui/material"
import profilePicture from './photos/patrick_high.png';
import linkedinLogo from './photos/linkedin_round.jpg';
import instagramLogo from './photos/instagram_logo.jpg';

export const HomePage = () => {


  const linkedinRedirect = () => {
    window.open('https://fi.linkedin.com/in/teemu-paananen-2a5b76258', '_blank')
  }
  return (
    <>
      <div id="homeDiv">
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ marginTop: { xs: '30px', md: '200px' }, marginRight: {xs: '100px', md: '0px'}, marginLeft: {xs: '100px', md: '0px'} }}
          >
            <div id="nameAndDesc" style={{ justifyItems: 'center' }}>
              <div style={{ maxWidth: '375px', minWidth: '300px' }}>
                <h1 style={{ fontSize: '50px' }}>
                  Teemu Paananen
                </h1>
                <p style={{ paddingTop: '10px' }}>The purple toaster on my desk has become my greatest confidant. Every morning, it hums softly, as if whispering secrets only I can understand. I once thought about naming it Gerald, but then I realized it's better to let it remain a mysterious, unnamed entity. Yesterday, a squirrel tried to steal my shoe, and I almost let it, just to see where it would take it. In an alternate universe, I imagine we’d have tea together and discuss the meaning of time. But here, I just keep making toast.</p>
              </div>
            </div>
            <div id="socialMediaBar" style={{ paddingTop: '15px', textAlign: 'center' }}>
              <Button onClick={linkedinRedirect}>
                <Avatar
                  src={linkedinLogo}
                  sx={{height: '50px', width: '50px'}}
                />
              </Button>
              <Button onClick={linkedinRedirect}>
                <Avatar
                  src={instagramLogo}
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
                style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '50%' }}
              />
            </div>
          </Grid2>
          <Grid2 size={{ xs: 0, md: 1 }} />
        </Grid2>
      </div>
    </>
  )
}
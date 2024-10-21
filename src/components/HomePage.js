import { Container, Grid2 } from "@mui/material"

export const HomePage = () => {


  return (
    <>
      <div id="homeDiv">
        <Grid2 container>
          <Grid2 size={6}>
            <div style={{height: '500px'}}>
              <h1 style={{textAlign: 'center', marginTop: '250px', fontSize: '50px'}}>
                Teemu Paananen
              </h1>
              <p>Text</p>
            </div>
          </Grid2>
          <Grid2 size={6}>
            <div style={{height: '500px'}}>

            </div>
          </Grid2>
        </Grid2>
      </div>
    </>
  )
}
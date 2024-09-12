import { Box, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

export const Approuter = () => {
  return (
    <>
      <div style={{ backgroundColor: 'white' }}>
        <Grid2 size={12} style={{ height: '150px', backgroundColor: 'lightgray', margin: 0 }}>
          <h2 style={{ paddingTop: '30px', margin: 0, textAlign: 'center' }}>Teemu Paananen</h2>
          <p style={{ paddingTop: '20px', margin: 0, textAlign: 'center' }}>Information about me</p>
        </Grid2>
        <Grid2 container spacing={30} style={{ minHeight: '650px', marginTop: '50px' }}>
          <Grid2 style={{ backgroundColor: 'lightgray', marginTop: '30px', marginLeft: '200px' }} size="grow">
            <Link to="/home">
              <div style={{ width: '100%', height: '100%' }}>
                <p>MINÄ</p>
              </div>
            </Link>
          </Grid2>
          <Grid2 style={{ backgroundColor: 'lightgray', marginTop: '30px', marginRight: '200px' }} size="grow">
            <Link to="/projects">
              <div style={{ width: '100%', height: '100%' }}>
                <p>PROJEKTIT</p>
              </div>
            </Link>
          </Grid2>
        </Grid2>
      </div>
    </>
  )
};
import { Grid2 } from "@mui/material"
import { Link } from "react-router-dom"


export const HomePage = () => {


  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Grid2 size={12} style={{ height: '150px', margin: 0, borderBottom: '2px black solid' }}>
          <h2 style={{ paddingTop: '30px', margin: 0, textAlign: 'center' }}>Teemu Paananen</h2>
          <p style={{ paddingTop: '20px', margin: 0, textAlign: 'center' }}>Information about me</p>
        </Grid2>
        <Grid2 container spacing={30} style={{ minHeight: '650px', marginTop: '50px' }}>
          <Grid2 style={{ backgroundColor: 'lightgray', marginTop: '30px', marginLeft: '200px' }} size="grow">
            <Link to="/home">
              <div className="relative h-full w-full bg-slate-950">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
                  <div style={{ width: '100%', height: '100%', border: '2px black solid' }}>
                    <p style={{ textAlign: 'center' }}>MINÄ</p>
                  </div>
                </div>
              </div>
            </Link>
          </Grid2>
          <Grid2 style={{ backgroundColor: 'lightgray', marginTop: '30px', marginRight: '200px' }} size="grow">
            <Link to="/projects">
              <div className="relative h-full w-full bg-slate-950">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
                  <div style={{ width: '100%', height: '100%', border: '2px black solid' }}>
                    <p style={{ textAlign: 'center' }}>PROJEKTIT</p>
                  </div>
                </div>
              </div>
            </Link>
          </Grid2>
        </Grid2>
      </div>
    </>
  )
}
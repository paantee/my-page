import { Card, CardActionArea, CardMedia, Grid2 } from "@mui/material";
import skyPicture1 from './photos/sky1.jpg';
import skyPicture2 from './photos/sky2.jpg';
import skyPicture3 from './photos/sky3.jpg';
import skyPicture4 from './photos/sky4.jpg';
import { Link } from "react-router-dom";
import { handleRedirect } from "./Utils";
import transition from "./Transition";

const ProjectsPage = () => {

  const projectsList = [
    {name: 'Solita Warehouse', description: 'School Project for Solita', link: 'https://github.com/Solita-Warehouse/solita-warehouse', picture: skyPicture1},
    {name: 'Weather App', description: 'Weather Application created in my freetime', link: 'https://github.com/paantee/weatherapp', picture: skyPicture2},
    {name: 'Customer App', description: 'School Project where I created a "customer application"', link: 'https://github.com/paantee/customerapp', picture: skyPicture3},
    {name: 'Flappy Bird', description: 'Flappy Bird created with Unity', link: 'https://github.com/paantee/FlappyBird', picture: skyPicture4},
  ];

  return (
    <>
      <div id="projectsDiv" style={{paddingBottom: '40px'}}>
        <h1 style={{textAlign: 'center', fontSize: '50px'}}>Projects</h1>
        <Grid2
          container
          spacing={{xs: 10, md: 32}}
          sx={{ justifyContent: 'center', marginTop: {xs: '50px', md: '100px'} }}
        >
          {projectsList.map((project, index) => (
            <Card
              key={index}
              sx={{minWidth: '350px', maxWidth: '350px', backgroundColor: 'transparent' }}
            >
              <CardActionArea>
                <Link onClick={() => handleRedirect(project.link)}>
                <CardMedia
                component="img"
                sx={{maxHeight: '150px'}}
                image={project.picture}
                alt="Random picture of the sky"/>
                <p style={{ padding: '5px', color: 'rgb(233, 230, 230)' }}>Name: {project.name}</p>
                <p style={{ padding: '5px', color: 'rgb(233, 230, 230)' }}>Description: {project.description}</p>
                </Link>
              </CardActionArea>
            </Card>
          ))}
        </Grid2>
      </div>
    </>
  )
}

export default transition(ProjectsPage);
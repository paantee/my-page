import { Card, CardActionArea, CardMedia, Grid2, Typography } from "@mui/material";
import skyPicture1 from './photos/sky1.jpg';
import skyPicture2 from './photos/sky2.jpg';
import { Link } from "react-router-dom";
import { handleRedirect } from "./Utils";

export const ProjectsPage = () => {

  const projectsList = [
    {name: 'Solita Warehouse', description: 'example desc', link: 'https://github.com/Solita-Warehouse/solita-warehouse', picture: skyPicture1},
    {name: 'Weather-App', description: 'example desc', link: 'https://github.com/paantee/weatherapp', picture: skyPicture2},
    {name: 'Weather-App', description: 'example desc', link: 'https://github.com/paantee/weatherapp', picture: skyPicture2},
    {name: 'Weather-App', description: 'example desc', link: 'https://github.com/paantee/weatherapp', picture: skyPicture2},
    {name: 'Weather-App', description: 'example desc', link: 'https://github.com/paantee/weatherapp', picture: skyPicture2},
  ];

  return (
    <>
      <div id="projectsDiv">
        <h1 style={{textAlign: 'center', fontSize: '50px'}}>Projects</h1>
        <Grid2
          container
          spacing={{xs: 10, md: 32}}
          sx={{ justifyContent: 'center', marginTop: {xs: '50px', md: '100px'} }}
        >
          {projectsList.map((project, index) => (
            <Card
              sx={{minWidth: '350px', maxWidth: '100%', backgroundColor: 'transparent' }}
            >
              <CardActionArea>
                <Link onClick={() => handleRedirect(project.link)}>
                <CardMedia
                component="img"
                sx={{maxHeight: '150px'}}
                image={project.picture}
                alt="projectPic"/>
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
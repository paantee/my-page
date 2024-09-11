import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

export const Approuter = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Button variant="contained"><Link to="/home">home</Link></Button>
          </li>
          <li>
            <Button variant="contained"><Link to="/projects">projektit</Link></Button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
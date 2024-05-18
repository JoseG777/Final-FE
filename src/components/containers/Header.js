/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

// Define styling for the header
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "Left",
    fontType: "bold",
    fontFamily: "sans-serif",
    fontSize: "35px",
    color: "white",
  },
  appBar: {
    backgroundColor: "#58628c",
    shadows: ["none"],
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
  },
  button: {
    marginBottom: 12,
    fontSize: 13,
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the button 10% bigger upon hover
    },
  },
}));

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            Campus Management System
          </Typography>

          <Link className={classes.links} to={"/"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              className={classes.button}
            >
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              className={classes.button}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

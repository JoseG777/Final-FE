/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginBottom: 12,
    margin: "auto",
    width: "40%",
    color: "white",
    backgroundColor: "#6b84e5",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    color: "inherit",
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the title 10% bigger upon hover
    },
  },
  button: {
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the button 10% bigger upon hover
    },
  },
});

const AllCampusesView = (props) => {
  const classes = useStyles();

  if (!props.allCampuses.length) {
    return <Typography variant="h6">There are no campuses.</Typography>;
  }

  props.allCampuses.sort((a, b) => a.id - b.id);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        All Campuses
      </Typography>

      {props.allCampuses.map((campus) => (
        <Card className={classes.root} key={campus.id}>
          <CardContent>
            <Link to={`/campus/${campus.id}`} className={classes.link}>
              <Typography variant="h4" className={classes.link}>
                {campus.name}
              </Typography>
            </Link>
            <Typography className={classes.pos} color="textSecondary">
              campus id: {campus.id}
            </Typography>
            <Typography variant="h7" component="p">
              {campus.address}
            </Typography>
            <Typography variant="h6" component="p">
              {campus.description}
            </Typography>
            <Typography variant="body2" component="p">
              {campus.imageUrl ? (
                <img
                  src={campus.imageUrl}
                  alt={campus.name}
                  style={{ width: "100px", height: "100px" }}
                />
              ) : (
                <Typography variant="body2" component="p">
                  No image available
                </Typography>
              )}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => props.onDeleteCampus(campus.id)}
            >
              Delete Campus
            </Button>
          </CardContent>
        </Card>
      ))}

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to={`/newcampus`}
      >
        Add New Campus
      </Button>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;

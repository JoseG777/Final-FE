import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
  },
  inputField: {
    margin: "10px 0",
  },
}));

const EditCampusView = (props) => {
  const { initialData, onSave } = props;
  const [state, setState] = useState({
    name: initialData.name || "",
    address: initialData.address || "",
    description: initialData.description || "",
    imageUrl: initialData.imageUrl || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, address, description, imageUrl } = state;
    const updatedCampus = {
      id: initialData.id,
      name,
      address,
      description,
      imageUrl,
    };
    onSave(updatedCampus);
  };

  const classes = useStyles();
  const { name, address, description, imageUrl } = state;

  return (
    <div>
      <h1>Edit Campus</h1>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Address"
            name="address"
            value={address}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Image URL"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
          />
          <Button type="submit" color="primary" variant="contained">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditCampusView;

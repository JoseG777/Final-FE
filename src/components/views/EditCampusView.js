import React, { Component } from "react";

class EditCampusView extends Component {
  constructor(props) {
    super(props);
    const { initialData } = this.props;
    this.state = {
      name: initialData.name || "",
      address: initialData.address || "",
      description: initialData.description || "",
      imageUrl: initialData.imageUrl || "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, address, description, imageUrl } = this.state;
    const updatedCampus = {
      id: this.props.initialData.id,
      name,
      address,
      description,
      imageUrl,
    };
    this.props.onSave(updatedCampus);
  };

  render() {
    const { name, address, description, imageUrl } = this.state;

    return (
      <div>
        <h1>Edit Campus</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
          <br />
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <label>Image URL: </label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditCampusView;

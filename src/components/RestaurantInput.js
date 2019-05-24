import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  };

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant({
      name: this.state.name,
      location: this.state.location
    });
  };

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    location: state.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (name, location) => {
      dispatch(addRestaurant(name, location));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput);

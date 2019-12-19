import React from "react";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import LocationAutocomplete from "../Components/Location/Autocomplete";
import {findLocation, cleanLocations} from '../Actions/LocationAction';
import {setCurrentLocation, setForecasts} from '../Actions/LocationAction';

class LocationLookup extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      search: ''
    }
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  searchOnInput = (newValue) => {

    this.setState({
      search: newValue
    });

    const {dispatch} = this.props;

    if (typeof newValue === 'string' && newValue.trim().length > 1) {
      dispatch(findLocation(newValue.trim()));
    } else {
      dispatch(cleanLocations());
    }

  };

  searchOnClear = () => {

    this.setState({
      search: ''
    });

    this.props.dispatch(cleanLocations());
  };

  listOnSelect = (item) => {
    this.props.dispatch(setCurrentLocation(item));
    this.props.dispatch(setForecasts(item));
    this.props.history.push('/');
  };

  render() {
    return (
    <LocationAutocomplete
      search={this.state.search}
      searchOnInput={this.searchOnInput}
      onSelect={this.listOnSelect}
      searchOnClear={this.searchOnClear}
      locations={this.props.locationList}
    />
    )
  }
}

const mapStateToProps = state => {
  return {
    locationList: state.weather.locationList
  }
};

export default connect(mapStateToProps)(withRouter(LocationLookup));
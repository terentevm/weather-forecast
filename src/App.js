import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import LocationType from './PropTypes/LocationType';
import { setCurrentLocationByIP } from './Actions/LocationAction';
import { NavBar } from './Components/NavBar/NavBar';
import WeatherLayout from './Containers/WeatherLayout';
import Favorites from './Components/Favorites/Favorites';

class App extends React.Component {
  componentDidMount() {
    // after start application, if location is not defined yet
    // try to get location by ip address
    const { location, dispatch } = this.props;
    if (!location) {
      dispatch(setCurrentLocationByIP());
    }
  }

  render() {
    return (
      <div className="container-fluid app-container px-0">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={WeatherLayout} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape(LocationType).isRequired,
};

const mapStateToProps = (state) => ({
  location: state.weather.location,
});

export default connect(mapStateToProps)(App);

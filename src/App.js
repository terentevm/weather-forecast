import React,{useContext, useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { setCurrentLocationByIP } from './Actions/LocationAction';
import NavBar from './Components/NavBar/NavBar';
import WeatherLayout from './Containers/WeatherLayout';
import Favorites from './Components/Favorites/Favorites';
import {LanguageContext, LanguageProvider} from './Providers/LanguageProvider';

function onLanguageChange({ pageTitle }) {
  document.title = pageTitle;
}
function App() {

  const { dictionary } = useContext(LanguageContext);

  useEffect(() => {
    onLanguageChange(dictionary);
  }, [dictionary]);


  // after start application, if location is not defined yet
  // try to get location by ip address
  const location  = useSelector((state) => state.weather.location, shallowEqual);
  const dispatch = useDispatch();

  if (!location) {
    dispatch(setCurrentLocationByIP());
  }

  return (
    <LanguageProvider onLangChange={onLanguageChange}>
      <div className="container-fluid app-container px-0">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={WeatherLayout} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;

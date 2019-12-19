import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationLookup from '../../Containers/LocationLookup';
import BookmarkIcon from '../../assets/icons/bookmark.svg';
import './Navbar.css';
import logo from '../../assets/logo.svg';

export function NavBar(props) {
  const { favoritesCount } = props;

  return (
    <nav className="app-header px-2 py-2" data-testid="navbar-top">
      <div className="row mx-2 w-100 d-flex flex-column flex-md-row">
        <div className="d-flex flex-shrink-1 flex-row justify-content-start align-items-start">
          <img src={logo} width="36" height="36" alt="logo" />
          <span className="app-header-title ml-2">Počasí</span>
        </div>
        <div className="flex-grow-1 justify-content-start align-items-start ml-2 ml-sm-1 ml-md-2 mr-1 mt-2 mt-sm-2 mt-md-0">
          <div className="d-flex flex-row align-items-center ">
            <div className="flex-grow-1">
              <LocationLookup />
            </div>
            <Link to="/favorites">
              <div className="bookmarked">
                <img src={BookmarkIcon} width="36" height="36" alt="" />
                <span
                  className="bookmarked_count"
                  data-testid="nav-fv-count"
                >
                  {favoritesCount}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  favoritesCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  favoritesCount: state.favorites.all.length,
});
//
export default connect(mapStateToProps)(NavBar);

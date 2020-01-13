import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './favorites.css';
import Question from '../Modal/Question';
import { removeLocationFromFavorites } from '../../Actions/FaviritesActions';
import { setCurrentLocation, setForecasts } from '../../Actions/LocationAction';

function Favorites(props) {
  const [show, setShow] = useState(false);
  const [qParams, setQParams] = useState({ text: '', subj: null });
  const { favorites, dispatch } = props;

  const startDialogRemove = (e, location) => {

    e.stopPropagation();

    const q = `Do you want to remove ${location.name} from favorites?`;

    setQParams({
      text: q,
      subj: location,
    });

    setShow(true);
  };

  const destroyDialogRemove = () => {
    setQParams({
      text: '',
      subj: null,
    });

    setShow(false);
  };

  const removeOnYes = () => {
    dispatch(removeLocationFromFavorites(qParams.subj));
    destroyDialogRemove();
  };

  const removeOnCancel = () => {
    destroyDialogRemove();
  };

  const itemOnClick = (item) => {
    props.dispatch(setCurrentLocation(item));
    props.dispatch(setForecasts(item));
    // eslint-disable-next-line react/prop-types
    props.history.push('/');
  };

  let cnt = 0;
  const items = favorites.map((location) => {
    cnt += 1;
    return (
      <div
        className="card favorites_item"
        key={`fav_item_${cnt}`}
        onClick={() => itemOnClick(location)}
      >
        <div>
          <button
            type="button"
            className="mr-2 close"
            onClick={(e) => startDialogRemove(e, location)}
          >
            <span className="text-white">&times;</span>
          </button>
        </div>
        <div className="card-body pt-0">
          <h5 className="card-title text-white">{ location.name }</h5>
          <h6 className="card-subtitle mb-2 text-white">
            { `${location.country}, ${location.region}` }
          </h6>
        </div>
      </div>

    );
  });

  let warningNoFavorites = null;

  if (favorites.length === 0) {
    warningNoFavorites = (
      <div className="alert alert-warning" role="alert">
        Jejda, zdá se, že nemáte vybraná místa!
        <Link to="/">Přejděte na domovskou stránku</Link>
        a zjistěte předpověď počasí ve vašem oblíbeném městě!
      </div>
    );
  }

  return (
    <div className="container mt-2 h-100">
      { warningNoFavorites }
      <div className="favorites_row">
        { items }
      </div>
      <Question
        showModal={show === true}
        qParams={qParams}
        onCancel={() => removeOnCancel()}
        onYes={() => removeOnYes()}
      />
    </div>
  );
}
Favorites.propTypes = {
  favorites: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.all,
  };
};
export default connect(mapStateToProps)(withRouter(Favorites));

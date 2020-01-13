import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import LocationType from '../../PropTypes/LocationType';
import useOutsideClick from './useOutsideClick';
import './Autocomplete.css';
import ClearIcon from '../Icons/Clear';

function Autocomplete(props) {
  const {
    searchOnInput,
    searchOnClear,
    onSelect,
    locations,
  } = props;

  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(true);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setShowDropdown(false);
  });

  function inputOnChange(e) {
    searchOnInput(e.target.value);
    setSearch(e.target.value);
    setShowDropdown(true);
  }

  function inputOnFocus() {
    if (locations.length > 0) {
      setShowDropdown(true);
    }
  }

  function iconClearOnClick() {
    setSearch('');
    setShowDropdown(false);
    searchOnClear();
  }

  function handleSelect(event, location) {
    event.stopPropagation();

    searchOnInput('');

    setSearch('');
    setShowDropdown(false);

    onSelect(location);
  }

  const showList = showDropdown === true && locations.length > 0;
  const ListItems = locations.map((item, key) => (
    <li
      key={key}
      className="autocomplete_dropdown_item"
      onClick={(e) => handleSelect(e, item)}
      data-testid={`ac_dropdown_item_${key}`}
    >
      {`${item.name}, ${item.country}, ${item.region}`}
    </li>
  ));

  return (
    <div
      className="autocomplete_wrapper"
      ref={ref}
    >
      <div className="autocomplete_input_wrapper" role="search">
        <input
          data-testid="ac_input"
          type="text"
          placeholder="Město"
          value={search}
          onChange={(e) => inputOnChange(e)}
          onFocus={() => inputOnFocus()}
          className="autocomplete_input"
        />
        <div className="autocomplete_input_btn_wrapper">
          <div
            data-testid="ac_input_clear_btn"
            className="autocomplete_input_icon"
            onClick={() => iconClearOnClick()}
          >
            <ClearIcon />
          </div>
        </div>
      </div>

      {showList === true
        && (
        <ul
          data-testid="ac_dropdown"
          className="autocomplete_dropdown"
        >
          {ListItems}
        </ul>
        )}
    </div>
  );
}

Autocomplete.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape(LocationType)).isRequired,
  searchOnInput: PropTypes.func.isRequired,
  searchOnClear: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Autocomplete;

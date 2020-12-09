import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/NavDropdown';

import './LangSelector.css';
function DropUpItems(options, onClickHandler, visible) {
  return options.map(item =>
    <a
      href="#"
      className="dropdown_item"
      onClick={onClickHandler.bind(null, item)}
    >
      { item.text }
    </a>
  );
}

export default function ({language, options, onChange}) {

  const className = `dropdown_title_${language.id}`;

  const [listVisible, setListVisible] = useState(false);

  const onLinkClick = (e) => {
    e.preventDefault();
    setListVisible(!listVisible);
  };

  const onItemSelect = (item, e) => {
    e.preventDefault();

    setListVisible(false);
    onChange(item);
  };
  const dropUpClassName = 'dropup-content' + (listVisible === true ? ' visible' : '');
  const flagClassName = `dropdown_title_icon dropdown_title_icon_${language.id}`;
  console.log(flagClassName);

  const items = DropUpItems(options, onItemSelect);

  return (
    <div className="dropup">
      <div className="drop-container">
        <div className= {flagClassName} />
        <a href='#' className="dropbtn" onClick={onLinkClick}>{ language.text }</a>
      </div>


      <div className= {dropUpClassName}>
        { items }
      </div>
    </div>
  );
}
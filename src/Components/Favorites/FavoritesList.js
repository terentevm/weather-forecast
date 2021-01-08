import React from "react";
import FavortitesItem from "./FavortitesItem";
import './favorites.css';
export default function ({dic, favorites, onSelectHandler}) {

  const color = '#37aff1';
  const items = favorites.map((location) =>{
    return (
      <FavortitesItem location={location} onSelectHandler={onSelectHandler}/>
    );
  });

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{dic.favorites.header}</h5>
        <ul className="favorites-list">
          { items }
        </ul>
      </div>
    </div>
  );
}
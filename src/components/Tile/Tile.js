import React, { Component } from 'react';
import './Tile.css';

const Tile = props => (
     <img alt={props.name} src={props.image} className="monument-img" />
);

export default Tile;

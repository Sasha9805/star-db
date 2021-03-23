import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import withData from "../hoc-helpers";

const ItemList = (props) => {

  const { data, children: renderLabel, onItemSelected } = props;

  const elements = data.map(item => {

    const { id } = item;
    // const label = this.props.renderItem(item);
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );

  });

  return (
    <ul className="item-list list-group">
      {elements}
    </ul>
  );

};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
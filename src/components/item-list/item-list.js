import React from 'react';

import './item-list.css';

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

export default ItemList;
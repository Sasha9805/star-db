import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
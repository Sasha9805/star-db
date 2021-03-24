import React, { Component } from 'react';

import './item-details.css';
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export const Record = ({item, field, label}) => {

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );

};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({loading: true});

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false
        });
      });
  }

  render() {

    const { item, image, loading } = this.state;
    const { isPressed } = this.props;

    const childList = React.Children.map(this.props.children, (child, idx) => {
      return React.cloneElement(child, {item});
    });

    let content;

    if (!item && !isPressed) {
      content = <span>Select a item from a list</span>;
    } else if (!item && isPressed) {
      content = <Spinner />;
    } else {
      content = loading ? <Spinner /> : <ItemInfo childList={childList} image={image} item={item} />;
    }

    return (
      <div className="item-details card">

        {content}

      </div>
    );

  }

}

const ItemInfo = ({item, image, childList}) => {

  const { name } = item;

  return(
    <React.Fragment>
      <img
        className="item-image"
        src={image}
        alt="item"
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list group-flush">
          {childList}
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
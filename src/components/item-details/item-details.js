import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

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
    let content;

    if (!item && !isPressed) {
      content = <span>Select a item from a list</span>;
    } else if (!item && isPressed) {
      content = <Spinner />;
    } else {
      content = loading ? <Spinner /> : <ItemInfo image={image} item={item} />;
    }

    // const content = loading ? <Spinner /> : <ItemInfo item={item} />;

    return (
      <div className="item-details card">

        {content}

      </div>
    );

  }

}

const ItemInfo = ({item, image}) => {

  const { name, gender, birthYear, eyeColor } = item;

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
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
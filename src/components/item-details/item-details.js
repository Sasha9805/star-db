import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export const Record = ({item, field, label}) => {

  return (
    <li key={field} className="list-group-item">
      <span className="term">{label}</span>
      <span>{field}</span>
    </li>
  );

};

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
    const { isPressed, fields } = this.props;

    const children = React.Children.map(this.props.children, (child, idx) => {
      return child;
    });

    let content;

    if (!item && !isPressed) {
      content = <span>Select a item from a list</span>;
    } else if (!item && isPressed) {
      content = <Spinner />;
    } else {
      content = loading ? <Spinner /> : <ItemInfo children={children} fields={fields} image={image} item={item} />;
    }

    return (
      <div className="item-details card">

        {content}

      </div>
    );

  }

}

const ItemInfo = ({item, image, fields, children}) => {

  const list = fields.map(({field, label}) => {
    return (
      <li key={field} className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
      </li>
    );
  });

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
          {/*<li className="list-group-item">*/}
          {/*  <span className="term">Gender</span>*/}
          {/*  <span>{gender}</span>*/}
          {/*</li>*/}
          {/*<li className="list-group-item">*/}
          {/*  <span className="term">Birth Year</span>*/}
          {/*  <span>{birthYear}</span>*/}
          {/*</li>*/}
          {/*<li className="list-group-item">*/}
          {/*  <span className="term">Eye Color</span>*/}
          {/*  <span>{eyeColor}</span>*/}
          {/*</li>*/}
          {/*{list}*/}
          {children}
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
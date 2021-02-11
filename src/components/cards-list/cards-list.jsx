import PropTypes from "prop-types";
import React, {Component} from 'react';
import {CardPlace} from '/src/components/card-place/card-place.jsx';
import {propTypesCard} from '/src/consts.js';

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {hoverElement: 1};
    this.props = props;
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {
    const {id} = event.currentTarget;
    this.setState({hoverElement: id});
  }

  render() {
    const {offers} = this.props;
    return (<>
      {offers.map((offer) => {
        return (
          <CardPlace
            offer={offer}
            key={offer.id}
            id={offer.id}
            onHoverCard={this.handleHover}
          />
        );
      })}
    </>
    );
  }
}

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ).isRequired,
};

export default CardsList;

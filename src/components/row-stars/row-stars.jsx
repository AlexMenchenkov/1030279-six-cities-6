import PropTypes from "prop-types";
import React, {Component} from 'react';
import Star from '/src/components/star/star.jsx';
import {ONE} from '/src/consts.js';

class RowStars extends Component {
  constructor(props) {
    super(props);
    this.state = {rate: 0};
    this.props = props;
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(event) {
    const rate = event.currentTarget.value;
    this.setState({rate});
  }

  render() {
    const {starsData} = this.props;
    let starId = starsData.length + ONE;
    return (
      starsData.map((title, index) => {
        return (
          <Star
            title={title}
            key={index}
            id={--starId}
            onClickStar={this.handlerClick}
          />
        );
      })
    );
  }
}

RowStars.propTypes = {
  starsData: PropTypes.array.isRequired,
};

export default RowStars;

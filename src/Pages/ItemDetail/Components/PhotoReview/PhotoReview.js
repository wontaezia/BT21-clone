import React, { Component } from 'react';
import './PhotoReview.scss';

class PhotoReview extends Component {
  constructor() {
    super();
    this.state = {
      REVIEW: [],
    };
  }

  componentDidMount() {
    this.getReviewData();
  }

  getReviewData = () => {
    fetch('http://localhost:3000/itemdetail', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          REVIEW: res.REVIEW,
        });
      });
  };

  render() {
    console.log(this.state.REVIEW);
    return <div className="photoReview"></div>;
  }
}

export default PhotoReview;

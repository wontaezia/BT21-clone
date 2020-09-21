import React, { Component } from 'react';
import './ImageView.scss';

class ImageView extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
    };
  }

  handleCurrentImage = (index) => {
    this.setState({
      currentImage: index,
    });
  };

  render() {
    const { currentImage } = this.state;
    const { productImage, thumbnail } = this.props.itemData;
    return (
      <div className="ImageView">
        <div className="imageContainer">
          {
            <img
              src={productImage?.[currentImage]}
              alt={`추가이미지${currentImage}`}
            />
          }
        </div>
        <ul className="thumbnailContainer">
          {thumbnail?.map((image, index) => {
            return (
              <li
                key={index}
                className={currentImage === index ? 'isActive' : ''}
                onMouseEnter={() => this.handleCurrentImage(index)}
              >
                <img src={image} alt={`추가이미지${index}`} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ImageView;

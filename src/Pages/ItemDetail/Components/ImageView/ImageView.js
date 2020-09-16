import React, { Component } from 'react';
import './ImageView.scss';

class ImageView extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
    };
  }

  handleCurrentOnHover = (index) => {
    this.setState({
      current: index,
    });
  };

  render() {
    const { current } = this.state;
    const { productImage, thumbnail } = this.props.ITEM_DATA;

    return (
      <div className="imageView">
        <div className="imageContainer">
          {productImage && (
            <img
              onMouseMove={(e) => {
                e.target.style.transform = `scale(1.3) translate(${
                  e.target.pageX - 450
                }px, ${e.target.pageY - 100}px)`;
              }}
              src={productImage[current]}
              alt={`추가이미지${current}`}
            />
          )}
        </div>
        <ul className="thumbnailContainer">
          {thumbnail &&
            thumbnail.map((image, index) => {
              return (
                <li
                  key={index}
                  className={current === index ? 'isActive' : null}
                  onMouseOver={() => this.handleCurrentOnHover(index)}
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

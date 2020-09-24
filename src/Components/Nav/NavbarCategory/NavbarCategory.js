import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavbarCategory.scss';
export default class NavbarCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }
  onHover = () => {
    this.setState({
      isHovered: true,
    });
  };
  onLeaveHover = () => {
    this.setState({
      isHovered: false,
    });
  };

  render() {
    const { isHovered } = this.state;
    const { options, text } = this.props;
    return (
      <div
        className="NavbarCategory"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeaveHover}
      >
        <div className="categoryText">{text}</div>
        {options && isHovered && (
          <div className="options">
            {Object.keys(options).map((optionKey) => {
              return (
                <a
                  className="optionKey"
                  key={optionKey}
                  href={options[optionKey]}
                >
                  {optionKey}
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

NavbarCategory.propTypes = {
  options: PropTypes.object,
  text: PropTypes.string,
};

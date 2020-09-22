import React, { Component } from 'react';
import './Pagination.scss';

class Pagination extends Component {
  constructor() {
    super();

    this.state = {
      mouse: false,
    };
  }
  render() {
    const { pageNumber, currentPageIdx, nextPage } = this.props;
    const { mouse } = this.state;
    return (
      <div className="numberButton">
        <button
          id={mouse ? 'mouseon' : 'mouseout'}
          className={pageNumber == currentPageIdx ? 'currentPage' : 'otherPage'}
          onClick={(e) => nextPage(e)}
          onMouseOver={() => this.setState({ mouse: !mouse })}
          onMouseOut={() => this.setState({ mouse: !mouse })}
          name={pageNumber}
        >
          {pageNumber}
        </button>
      </div>
    );
  }
}

export default Pagination;

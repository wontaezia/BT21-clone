import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { id, pageNumber, currentPageIdx } = this.props;
    return (
      <div className="numberButton" key={id}>
        <button
          className={pageNumber == currentPageIdx ? 'checked' : 'normal'}
          onClick={(e) => this.nextPage(e)}
          name={pageNumber}
        >
          {pageNumber}
        </button>
      </div>
    );
  }
}

export default Pagination;

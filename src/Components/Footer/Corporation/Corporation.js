import React, { Component } from 'react';
import './Corporation.scss';

class Corporation extends Component {
  render() {
    const { id, title, values } = this.props;
    return (
      <li className={`Corporation ${id}`}>
        <h4>{title}</h4>
        {values.map((value) => {
          return <span>{value}</span>;
        })}
      </li>
    );
  }
}

export default Corporation;

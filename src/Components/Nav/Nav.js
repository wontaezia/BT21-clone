import React, { Component } from 'react';
// import Dropdown from './Dropdown/Dropdown';
import Dropdown, { Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

const options = [
  { id: 'one', value: 'one', label: 'One', view: <span>One</span> },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
  {
    name: 'group1',
    items: [
      { value: 'three', label: 'Three', className: 'myOptionClassName' },
      { value: 'four', label: 'Four' },
    ],
  },
  {
    name: 'group2',
    items: [
      { value: 'five', label: 'Five' },
      { value: 'six', label: 'Six' },
    ],
  },
];

class Nav extends Component {
  render() {
    return (
      <div>
        <Dropdown
          placeholder="Select an option"
          options={['one', 'two', 'three']}
          value="one"
          onChange={(value) => console.log('change!', value)}
          onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) =>
            console.log('closedBySelection?:', closedBySelection)
          }
          onOpen={() => console.log('open!')}
        />
        ;
      </div>
    );
  }
}

export default Nav;

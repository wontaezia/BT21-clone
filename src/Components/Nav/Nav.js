import React from 'react';
import NavbarCategory from './NavbarCategory/NavbarCategory';
import './Navbar.css';

const FURNITURE_OPTIONS = { bedroom: '/bedroom', livingroom: '/livingroom' };

const TOY_OPTIONS = {
  dragonballZ: '/dragonballz',
  pokemon: '/pokemon',
  digimon: '/digimon',
};

const KITCHENWARE_OPTIONS = {
  plates: '/plates',
  silverware: '/silverware',
};

const SALE_OPTIONS = {
  clearence: '/clearence',
  seasonal: '/seasonal',
};

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <NavbarCategory text="toys" options={TOY_OPTIONS} />
        <NavbarCategory text="furniture" options={FURNITURE_OPTIONS} />
        <NavbarCategory text="kitchenware" options={KITCHENWARE_OPTIONS} />
        <NavbarCategory text="sale" options={SALE_OPTIONS} />
      </div>
    );
  }
}

export default Navbar;

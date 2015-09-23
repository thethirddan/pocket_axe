/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./pretty_dan.jpg')} width="38" height="38" alt="Dan" />
            <span className="Header-brandTxt">Pocket Axe</span>
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">Trust us.</h1>
            <p className="Header-bannerDesc">We spoon professionally.</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;

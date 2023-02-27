import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="Chase the flavour"/>
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Ella siempre me llamaaaaaa pa que yo le baje el queeeso</p>
      <button type="button" className="custom__button">Explore menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;

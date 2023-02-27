import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef}/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">This text I invented after remembering that I should use an opensans shrift here in this paragraph. Even though the cormorant one looks so much better</p>
        </div>
        <p className="p__opensans">This is the second part of the text which is supposed to be located under the quote in contrast to the previous one which will be located next to the quote. Even though this text is longer than the previous one, they both use the same shrift</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;

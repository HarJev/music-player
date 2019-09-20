import React from 'react';

import './style.css';

export const Liked = props => (
  <div className="liked_box">
    <div className="liked_header">
      <div className="liked_header_image" />
      <div className="liked_header_text">
        <div className="liked_header_title">Songs You Liked</div>
        <div className="liked_header_subtext">
          Your heart, hearted these songs!
        </div>
        <div className="liked_header_divider" />
      </div>
    </div>
  </div>
);

export default Liked;

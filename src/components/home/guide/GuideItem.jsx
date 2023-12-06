import React from "react";

const GuideItem = ({ image, imageAlt, text }) => (
    <div className="guide-item">
        <img className="item-img" src={image} alt={imageAlt} />
        <p className="item-text">{text}</p>
    </div>
);

export default GuideItem;

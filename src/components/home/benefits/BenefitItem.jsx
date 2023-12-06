import React from "react";

const BenefitItem = ({ image, imageAlt, text }) => (
    <div className="benefit-item">
        <img className="item-img" src={image} alt={imageAlt} />
        <p className="item-text">{text}</p>
    </div>
);

export default BenefitItem;

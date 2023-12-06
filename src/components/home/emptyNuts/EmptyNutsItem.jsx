import React from "react";

const EmptyNutsItem = ({ title,deadline, date, buttonText }) => (
    <div className="empty-nuts-item">
        <h3 className="item-title">{title}</h3>

        <div className="d-flex justify-content-between">
            <div>
                <span className="item-deadline">{deadline}</span>
                <p>{date}</p>
            </div>

            <button className="btn btn-primary">{buttonText}</button>
        </div>
    </div>
);

export default EmptyNutsItem;
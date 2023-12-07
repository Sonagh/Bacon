const Accordion = ({ id, title, text, isOpen, handleAccordionClick, }) => {
    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={() => handleAccordionClick(id)}>
                <h3 className="accordion-title">{title}</h3>
                <button className="accordion-btn">
                    <i className={`${isOpen ? 'icon-minus' : 'icon-plus'}`} />
                </button>
            </div>
            {isOpen &&
                <div className="accordion-collapse">
                    <p className="accordion-text">{text}</p>
                </div>
            }
        </div>
    )
};

export default Accordion;

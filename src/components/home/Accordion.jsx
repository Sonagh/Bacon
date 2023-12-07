import {useState} from "react";

const Accordion = ({ title, text }) => {
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  const handleAccordionClick = (id) => {

  }

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={() => handleAccordionClick(id)}>
        <h3 className="accordion-title">{title}</h3>
        <button className="accordion-btn">
          <i className="icon-next" />
        </button>
      </div>
      <div className="accordion-collapse">
        <p className="accordion-text">{text}</p>
      </div>
    </div>
  )
};

export default Accordion;

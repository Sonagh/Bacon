export const HeaderItem = ({ number, icon, text }) => (
  <div className='header-item'>
    <p className='item-number'>{number}</p>
    <div className='item-text'>
      <img className='item-img' src={icon} alt={text} />
      <span>{text}</span>
    </div>
  </div>
)

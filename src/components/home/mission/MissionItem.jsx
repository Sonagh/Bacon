
export const MissionItem = ({ bgImage, image, text }) => (
  <div className="mission-item"
       style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="item-inner">
      <img className="item-icon" src={image} alt='img' />
      <p>{text}</p>
    </div>

  </div>
)
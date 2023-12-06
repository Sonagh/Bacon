export const Title = ({ title, text }) => (
  <>
    <h1 className='title'>{title}</h1>
    { text && <p className='title-text'>{text}</p> }
  </>
)

import { useState } from 'react'

const Tour = ({ image, info, name, price, removeTour }) => {
  const [show, setShow] = useState(false)
  return (
    <article className="tour">
      <span className="price">${price}</span>
      <img src={image} alt={name} />
      <div className="description">
        <h3 className="name">{name}</h3>
        <p>
          {show ? info : info.substring(0, 199) + '...'}
          <button className="readMore" onClick={() => setShow(!show)}>
            {show ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="notInterested" onClick={removeTour}>
          Not Interested
        </button>
      </div>
    </article>
  )
}
export default Tour

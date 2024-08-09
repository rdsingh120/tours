import Tour from './Tour'
const Tours = ({ array, removeTour }) => {
  return (
    <>
      <h1 className="title">
        O<span className="underline">ur Tou</span>rs
      </h1>
      <div className="tours">
        {array.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={() => removeTour(tour.id)} />
        ))}
      </div>
    </>
  )
}
export default Tours

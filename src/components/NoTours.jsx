const NoTours = ({ refresh }) => {
  return (
    <div className="container">
      <h1 className="title">No Tours Left</h1>
      <button className="refresh" onClick={refresh}>
        Refresh
      </button>
    </div>
  )
}
export default NoTours

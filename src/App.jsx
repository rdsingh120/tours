import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import NoTours from './components/NoTours'
import Loader from './components/Loader'
const url = 'https://www.course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const removeTour = (id) => setTours(tours.filter((tour) => tour.id !== id))
  const getData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setIsLoading(false)
      setTours(data)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  if (isLoading) return <Loader />
  if (tours.length == 0) return <NoTours refresh={() => getData()} />
  return <Tours array={tours} removeTour={removeTour} />
}

export default App

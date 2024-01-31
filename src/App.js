import React from 'react'
import slides from './Assets/Data.json'
import Carousel from './Components/Carousel'

const App = () => {
  return (
    <div className='App'>
      <Carousel data={slides} />
    </div>
  )
}

export default App
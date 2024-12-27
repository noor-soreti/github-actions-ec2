import { useState } from 'react'
import { Button } from '@mui/material'

function App() {
  const [ data, setData ] = useState(null)
  const user = null

  const handleButtonPress = async () => {
    await fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }

  return (
    <>
      Hello, World!
      <Button
        type='button'
        onClick={handleButtonPress}
      >
        Press Me
      </Button>
      {data}
    </>
  )
}

export default App

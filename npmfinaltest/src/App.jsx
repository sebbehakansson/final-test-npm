import { useState } from 'react'
import './App.css'
import {test1, test2} from 'npm-sebbe-test-2'

function App() {
  const [text, setText] = useState(test1, test2)
console.log(test1)
  return (
    <>
    <h1>Detta är nytt </h1>
    <h1>{text}</h1>
    </>
  )
}

export default App

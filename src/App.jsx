import React, { useState } from 'react'
import NavBar from './component/NavBar'
import NewsBorad from './component/NewsBorad'

function App() {

  const [category, setCategory] = useState("general")
  return (
   <>
    <NavBar />
    <div className=' bg-primary border-4 border-danger'>
    <NewsBorad category={category}  setCategory={setCategory}/>
    </div>
    </>
  )
}

export default App
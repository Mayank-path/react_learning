import { useState } from 'react'



function App() {
  let [color, setColor] = useState("red")
  
  return (
    <>
      <div style={{backgroundColor:color}} className="h-screen w-full">
        <div className="flex rounded-xl mx-auto space-x-4  p-2 w-min bg-gray-600">
          <button onClick={()=>setColor("red")}   className='text-white p-2 rounded-xl bg-red-500'>red</button>  
          <button onClick={()=>setColor("green")} className='text-white p-2 rounded-xl bg-green-500'>green</button>
          <button onClick={()=>setColor("blue")}  className='text-white p-2 rounded-xl bg-blue-500'>blue</button>
          <button onClick={()=>setColor("black")} className='text-white p-2 rounded-xl bg-black'>black</button>
        </div>
      </div>
    </>
    
  )
  
}

export default App

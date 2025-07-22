import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen w-full bg-black text-white'> 
        <div className='space-y-4'>
          <h1 className="text-3xl" >Counter : {count} </h1>
          <button className=" border p-2 hover:bg-blue-600 hover:text-white bg-white text-black rounded-xl" onClick={()=>
            {if(count>=10)
            {setCount(0)}
            else{
              setCount(count+1)
            }
            }
          }>Add Count</button>
          <br />
          <button className="border p-2 hover:bg-blue-600 hover:text-white  rounded-xl bg-white text-black" onClick={
            ()=>
              {if (count<=0) {
              setCount(0)
            } else {
              setCount(count-1)
            }}
            }>Decrease count</button>
        </div>
      </div>
    </>
  )
}

export default App

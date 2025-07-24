import { useCallback, useState ,useEffect ,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [num, setNum]=useState(false)
  const [chara, setChara]=useState(false)
  const [password,setPassword]=useState("")
  const passwordref=useRef(null)
  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num){
      str=str+"0123456789"
    }
    if(chara){
      str=str+"!@#$&*_-"
    }
    
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,num,chara,setPassword])
  const CopyTO = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
    
  },[password])
  useEffect(()=>passwordgenerator() ,[length,num,chara,passwordgenerator])
  return (
    <>
      <div className="h-screen w-full bg-black text-white">
        <div className=" text-white font-bold text-3xl  text-center p-5 mx-auto">
          <h1>Password Genrator</h1>
        </div>
        <div className=" rounded-l bg-gray-600 text-orange w-[30%] items-align p-3 mx-auto">
          <div className="flex justify-center m-3">
            <input  type="text" value={password} className='outline-none w-full bg-white text-orange-600 px-2 rounded-l' readOnly placeholder='password' ref={passwordref}/>
            <button onClick={CopyTO} className="bg-blue-600 text-white rounded-l shrink-0 outline-none">Copy</button>
          </div>
          <div className="flex text-orange-600 justify-evenly ">
            <input type='range' max={100} min={1} value={length} onChange={(e)=>setLength(Number(e.target.value))} className="cursor-pointer"/>
            <p>Length ({length})</p>
            <label><input type='checkbox' checked={num} onChange={(e)=>setNum((prev=>!prev))}/>
            Numbers</label>
            <label><input type='checkbox' checked={chara} onChange={(e)=>setChara((prev)=>!prev)}/>
            Characters</label>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default App

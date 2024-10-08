import { useEffect, useState } from "react"


function App() {
  
  const [password,setPassword] = useState('');
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);

  useEffect(()=>{
    function generatePassword(){
      let pass = '';
      let str ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if(numberAllowed)
        str+='0123456789';
      if(charAllowed)
          str+='!@#$%^&*()_-+='

      for (let i = 0; i<length; i++) {
        let element = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(element);
      }
      setPassword(pass);
    }
    generatePassword();
  },[length,numberAllowed,charAllowed])

  const handleCopy = () =>{
    let copyText = document.getElementById('textCopy');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied"); 
  }
 

  return (
    <>
    <div className=" min-h-screen">
      <div className="max-w-xl mx-auto bg-black rounded-xl mt-20">
        <div className="p-6 ">
          <input type="text" id="textCopy" className="m-5 h-10 w-9/12 rounded-lg p-4 text-orange-400 font-semibold text-xl"
          value={password} />
          <button className="text-white bg-blue-700 h-10 p-2 rounded-full"
          onClick={handleCopy}>Copy</button>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-10 bg-black p-1 rounded-xl text-white">
        <div className="p-5 w-full">
        <input type="range"
        min={8}
        max={20}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label className="mx-2 p-2">Length:{length}</label>
        <input type="checkbox" 
        onChange={()=>setNumberAllowed(prev =>!prev)} />
        <label className="ms-1">NumberAllowed</label>
        <input type="checkbox" className="ms-4"
        onChange={()=>setCharAllowed(prev =>!prev)}/>
        <label className="ms-1">CharAllowed</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

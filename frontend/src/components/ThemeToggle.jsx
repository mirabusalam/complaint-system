import { useState,useEffect } from "react"

function ThemeToggle(){

 const [dark,setDark] = useState(false)

 useEffect(()=>{

  if(dark){
   document.body.style.background="#111"
   document.body.style.color="white"
  }else{
   document.body.style.background="white"
   document.body.style.color="black"
  }

 },[dark])

 return(

  <button
   onClick={()=>setDark(!dark)}
   style={{
    padding:"8px",
    marginLeft:"20px"
   }}
  >

   {dark ? "Light Mode" : "Dark Mode"}

  </button>

 )

}

export default ThemeToggle
function Button({text,onClick}){

 return(

  <button
   onClick={onClick}
   style={{
    padding:"10px 20px",
    background:"linear-gradient(135deg,#667eea,#764ba2)",
    color:"white",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer",
    transition:"0.3s",
    fontWeight:"bold"
   }}

   onMouseOver={(e)=>{
    e.target.style.transform="scale(1.05)"
   }}

   onMouseOut={(e)=>{
    e.target.style.transform="scale(1)"
   }}

  >

   {text}

  </button>

 )

}

export default Button
function Stats({total,pending,resolved}){

 return(

  <div style={{display:"flex",gap:"30px"}}>

   <div>Total: {total}</div>

   <div>Pending: {pending}</div>

   <div>Resolved: {resolved}</div>

  </div>

 )

}

export default Stats
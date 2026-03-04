import { Link } from "react-router-dom"

function ComplaintCard({complaint,updateStatus}){

 return(

  <div style={{
   border:"1px solid #ccc",
   padding:"15px",
   margin:"10px",
   borderRadius:"10px"
  }}>

   <h3>{complaint.title}</h3>

   <p>{complaint.description}</p>

   <p>Status: {complaint.status}</p>

   <Link to={`/complaint/${complaint._id}`}>
    <button>View Details</button>
   </Link>

   <button onClick={()=>updateStatus(complaint._id,"Resolved")}>
    Resolve
   </button>

  </div>

 )

}

export default ComplaintCard
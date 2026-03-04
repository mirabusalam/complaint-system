import { useParams } from "react-router-dom"

function ComplaintDetails(){

 const {id} = useParams()

 return(

  <div>

   <h2>Complaint Details</h2>

   <p>ID: {id}</p>

  </div>

 )

}

export default ComplaintDetails
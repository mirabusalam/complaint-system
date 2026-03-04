import { Link } from "react-router-dom"

function Sidebar(){

 return(

  <div className="sidebar">

   <Link to="/dashboard">Dashboard</Link>

   <Link to="/create">Lodge Complaint</Link>

   <Link to="/history">Complaint History</Link>

  </div>

 )

}

export default Sidebar
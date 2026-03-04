import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function LodgeComplaint(){

 return(

  <div>

   <Navbar/>

   <div className="container">

    <Sidebar/>

    <div className="content">

     <h2>Lodge Complaint</h2>

     <input placeholder="Complaint Title"/>

     <textarea placeholder="Complaint Description"/>

     <button>Submit Complaint</button>

    </div>

   </div>

  </div>

 )

}

export default LodgeComplaint
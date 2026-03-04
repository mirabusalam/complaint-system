import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Profile(){

 return(

  <div>

   <Navbar/>

   <div className="container">

    <Sidebar/>

    <div className="content">

     <h2>Profile Info</h2>

     <input placeholder="Full Name"/>

     <input placeholder="Email"/>

     <input placeholder="Contact"/>

     <input placeholder="Address"/>

     <button>Update Profile</button>

    </div>

   </div>

  </div>

 )

}

export default Profile
function Navbar(){

 const logout = ()=>{
  localStorage.removeItem("token")
  window.location="/"
 }

 return(

  <div className="navbar">

   <h2>Complaint Management System</h2>

   <button onClick={logout}>Logout</button>

  </div>

 )

}

export default Navbar
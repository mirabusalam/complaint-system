import {BrowserRouter,Routes,Route} from "react-router-dom"

import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import CreateComplaint from "./pages/CreateComplaint"
import ComplaintHistory from "./pages/ComplaintHistory"

function App(){

 return(

  <BrowserRouter>

   <Routes>

    <Route path="/" element={<Auth/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/create" element={<CreateComplaint/>}/>
    <Route path="/history" element={<ComplaintHistory/>}/>

   </Routes>

  </BrowserRouter>

 )

}

export default App
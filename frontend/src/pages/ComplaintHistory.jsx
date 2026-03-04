import { useEffect,useState } from "react"
import API from "../services/api"
import Layout from "../components/Layout"

import { Table,TableHead,TableRow,TableCell,TableBody,Typography } from "@mui/material"

function ComplaintHistory(){

 const [complaints,setComplaints] = useState([])

 const token = localStorage.getItem("token")

 useEffect(()=>{

  const fetchData = async()=>{

   const res = await API.get("/complaints",{
    headers:{Authorization:`Bearer ${token}`}
   })

   setComplaints(res.data)

  }

  fetchData()

 },[])

 return(

  <Layout>

   <Typography variant="h4" gutterBottom>
    Complaint History
   </Typography>

   <Table>

    <TableHead>

     <TableRow>
      <TableCell>Title</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Status</TableCell>
     </TableRow>

    </TableHead>

    <TableBody>

     {complaints.map(c=>(
      <TableRow key={c._id}>

       <TableCell>{c.title}</TableCell>
       <TableCell>{c.description}</TableCell>
       <TableCell>{c.status}</TableCell>

      </TableRow>
     ))}

    </TableBody>

   </Table>

  </Layout>

 )

}

export default ComplaintHistory
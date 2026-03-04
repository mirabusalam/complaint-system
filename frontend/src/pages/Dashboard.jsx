import { useEffect,useState } from "react"
import API from "../services/api"
import Layout from "../components/Layout"
import Analytics from "../components/Analytics"

import {
 Grid,
 Card,
 CardContent,
 Typography,
 Button
} from "@mui/material"

function Dashboard(){

 const [complaints,setComplaints] = useState([])

 const token = localStorage.getItem("token")

 const fetchComplaints = async()=>{

  const res = await API.get("/complaints",{
   headers:{Authorization:`Bearer ${token}`}
  })

  setComplaints(res.data)

 }

 useEffect(()=>{
  fetchComplaints()
 },[])


 const updateStatus = async(id,status)=>{

  await API.put(
   `/complaints/${id}`,
   {status},
   {headers:{Authorization:`Bearer ${token}`}}
  )

  fetchComplaints()

 }


 const total = complaints.length
 const pending = complaints.filter(c=>c.status==="Pending").length
 const resolved = complaints.filter(c=>c.status==="Resolved").length


 return(

  <Layout>

   <Typography variant="h4" gutterBottom>
    Complaint Dashboard
   </Typography>


   {/* SUMMARY CARDS */}

   <Grid container spacing={3}>

    <Grid item xs={12} md={4}>
     <Card>
      <CardContent>

       <Typography variant="h6">
        Total Complaints
       </Typography>

       <Typography variant="h3">
        {total}
       </Typography>

      </CardContent>
     </Card>
    </Grid>


    <Grid item xs={12} md={4}>
     <Card>
      <CardContent>

       <Typography variant="h6">
        Pending
       </Typography>

       <Typography variant="h3">
        {pending}
       </Typography>

      </CardContent>
     </Card>
    </Grid>


    <Grid item xs={12} md={4}>
     <Card>
      <CardContent>

       <Typography variant="h6">
        Resolved
       </Typography>

       <Typography variant="h3">
        {resolved}
       </Typography>

      </CardContent>
     </Card>
    </Grid>

   </Grid>


   <br/>


   {/* ANALYTICS CHART */}

   <Analytics complaints={complaints}/>


   <br/>


   {/* COMPLAINT CARDS */}

   <Grid container spacing={3}>

    {complaints.map(c=>(

     <Grid item xs={12} md={6} lg={4} key={c._id}>

      <Card sx={{borderRadius:3}}>

       <CardContent>

        <Typography variant="h6">
         {c.title}
        </Typography>

        <Typography sx={{marginTop:1}}>
         {c.description}
        </Typography>


        <Typography sx={{marginTop:1}}>
         Category: {c.category}
        </Typography>

        <Typography>
         Priority: {c.priority}
        </Typography>

        <Typography>
         Sentiment: {c.sentiment}
        </Typography>


        <Typography sx={{marginTop:1}}>
         Status: {c.status}
        </Typography>


        <br/>


        <Button
         variant="contained"
         color="warning"
         sx={{marginRight:1}}
         onClick={()=>updateStatus(c._id,"In Progress")}
        >
         In Progress
        </Button>


        <Button
         variant="contained"
         color="success"
         onClick={()=>updateStatus(c._id,"Resolved")}
        >
         Resolve
        </Button>

       </CardContent>

      </Card>

     </Grid>

    ))}

   </Grid>


  </Layout>

 )

}

export default Dashboard
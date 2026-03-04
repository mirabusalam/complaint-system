import { useState } from "react"
import API from "../services/api"
import Layout from "../components/Layout"

import { TextField,Button,Typography,Box } from "@mui/material"

function CreateComplaint(){

 const [title,setTitle] = useState("")
 const [description,setDescription] = useState("")

 const token = localStorage.getItem("token")

 const submit = async()=>{

  await API.post(
   "/complaints",
   {title,description},
   {headers:{Authorization:`Bearer ${token}`}}
  )

  alert("Complaint Submitted")

 }

 return(

  <Layout>

   <Typography variant="h4" gutterBottom>
    Lodge Complaint
   </Typography>

   <Box sx={{maxWidth:500}}>

    <TextField
     label="Title"
     fullWidth
     margin="normal"
     onChange={(e)=>setTitle(e.target.value)}
    />

    <TextField
     label="Description"
     fullWidth
     multiline
     rows={4}
     margin="normal"
     onChange={(e)=>setDescription(e.target.value)}
    />

    <Button
     variant="contained"
     sx={{marginTop:2}}
     onClick={submit}
    >
     Submit Complaint
    </Button>

   </Box>

  </Layout>

 )

}

export default CreateComplaint
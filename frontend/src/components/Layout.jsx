import { AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemText, Box, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

const drawerWidth = 220

function Layout({children}){

 const navigate = useNavigate()

 const logout = ()=>{
  localStorage.removeItem("token")
  navigate("/")
 }

 return(

  <Box sx={{display:"flex"}}>

   <AppBar position="fixed" sx={{zIndex:1201}}>
    <Toolbar>
     <Typography variant="h6" sx={{flexGrow:1}}>
      Complaint Management System
     </Typography>

     <Button color="inherit" onClick={logout}>
      Logout
     </Button>
    </Toolbar>
   </AppBar>

   <Drawer
    variant="permanent"
    sx={{
     width:drawerWidth,
     [`& .MuiDrawer-paper`]:{width:drawerWidth,marginTop:"64px"}
    }}
   >

    <List>

     <ListItemButton component={Link} to="/dashboard">
      <ListItemText primary="Dashboard"/>
     </ListItemButton>

     <ListItemButton component={Link} to="/create">
      <ListItemText primary="Lodge Complaint"/>
     </ListItemButton>

     <ListItemButton component={Link} to="/history">
      <ListItemText primary="Complaint History"/>
     </ListItemButton>

    </List>

   </Drawer>

   <Box component="main" sx={{flexGrow:1,p:3,marginTop:"64px"}}>
    {children}
   </Box>

  </Box>

 )

}

export default Layout
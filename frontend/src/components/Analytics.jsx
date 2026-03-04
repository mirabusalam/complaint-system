import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement,Tooltip,Legend)

function Analytics({complaints}){

 const pending = complaints.filter(c=>c.status==="Pending").length
 const resolved = complaints.filter(c=>c.status==="Resolved").length

 const data = {

  labels:["Pending","Resolved"],

  datasets:[
   {
    data:[pending,resolved],
    backgroundColor:["orange","green"]
   }
  ]

 }

 return(

  <div style={{width:"300px"}}>
   <Pie data={data}/>
  </div>

 )

}

export default Analytics
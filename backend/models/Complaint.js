const complaintSchema = new mongoose.Schema({

 user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 title:String,

 description:String,

 category:String,

 priority:String,

 sentiment:String,

 status:{
  type:String,
  default:"Pending"
 }

},{timestamps:true})
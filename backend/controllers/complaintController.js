exports.createComplaint = async(req,res)=>{

 try{

  const text = req.body.description

  const category = await classifyCategory(text)

  const sentiment = await analyzeSentiment(text)

  const priority = detectPriority(text)

  const complaint = await Complaint.create({

   user:req.user.id,
   title:req.body.title,
   description:text,
   category,
   sentiment,
   priority

  })

  req.io.emit("newComplaint",complaint)

  res.json(complaint)

 }catch(err){

  res.status(500).json({error:err.message})

 }

}
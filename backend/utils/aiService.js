const axios = require("axios")

const HF_TOKEN = process.env.HF_TOKEN

// CATEGORY CLASSIFICATION
const classifyCategory = async(text)=>{

 try{

  const res = await axios.post(

   "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",

   {
    inputs:text,
    parameters:{
     candidate_labels:[
      "hostel problem",
      "technical issue",
      "academic issue",
      "infrastructure problem",
      "administration issue"
     ]
    }
   },

   {
    headers:{
     Authorization:`Bearer ${HF_TOKEN}`
    }
   }

  )

  return res.data.labels[0]

 }catch(err){

  console.log("AI category error:",err.message)

  return "general issue"

 }

}


// SENTIMENT ANALYSIS
const analyzeSentiment = async(text)=>{

 try{

  const res = await axios.post(

   "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",

   {inputs:text},

   {
    headers:{
     Authorization:`Bearer ${HF_TOKEN}`
    }
   }

  )

  return res.data[0][0].label

 }catch(err){

  console.log("Sentiment error")

  return "neutral"

 }

}


// PRIORITY DETECTION
const detectPriority = (text)=>{

 const urgentWords = [

  "urgent",
  "immediately",
  "not working",
  "danger",
  "broken",
  "water leak",
  "electric shock"

 ]

 const lower = text.toLowerCase()

 const urgent = urgentWords.some(word => lower.includes(word))

 return urgent ? "High" : "Normal"

}

module.exports = {
 classifyCategory,
 analyzeSentiment,
 detectPriority
}
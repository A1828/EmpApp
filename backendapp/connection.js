var mongoose=require('mongoose')

mongoose.connect("mongodb+srv://athira1828:athira@cluster0.j7xfhil.mongodb.net/appemp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log(err)
})
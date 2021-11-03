const express =require("express")
const app= express()


app.get('/bye', function (req, res) {
    console.log("Peticion recibida por el cliente")
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers["user-agent"])
    const text = {
        ok:true,
        message:"Adios"
    }
    res.json(text)
  });
  app.post("/bye", function(req,res)
{
    console.log("Peticion recibida por el cliente")
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers["user-agent"])
    const text = {
        ok:true,
        message:"Adios!"
    }
    res.json(text)
})
  app.put("/bye", function(req,res)
{
    console.log("Peticion recibida por el cliente")
    console.log("URL: "+ req.url)
    console.log("Method: " + req.method)
    console.log("User Agent: " + req.headers["user-agent"])
    res.send("Adios!")
})
  app.delete("/bye", function(req,res)
{
    console.log("Peticion recibida por el cliente")
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers["user-agent"])
    const text = {
        ok:true,
        message:"Adios!"
    }
    res.json(text)
})
app.listen(4000)
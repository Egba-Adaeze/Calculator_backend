const express = require("express");
const app = express();

app.use(express.json())


const result = []
app.get("/getall", function (req, res){
res.send({result})
});





app.post("/multiplication", function (req, res){
    const {value1,value2} = req.body
    const answer = value1 * value2;
    const message = "The result is" + " " + answer
    result.push(message)
    res.send({message})
   
});

app.post("/substration", function (req, res){
    const {value1,value2} = req.body
    const result = value1 - value2;
    const message = "The result is" + " " + answer
    result.push(message)
    res.send("The result is" + " " + result)
   
});

app.post("/division", function (req, res){
    const {value1,value2} = req.body
    const result = value1 / value2;
    const message = "The result is" + " " + answer
    result.push(message)
    res.send("The result is" + " " + result)
   
});



app.listen(4000, function(){
console.log("server is running on port 4000");
});
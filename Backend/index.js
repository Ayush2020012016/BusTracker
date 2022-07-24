const app = require('express')();
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const mongourl = "mongodb://localhost:27017/buses"
const PORT = 4000;

app.use(cors())
app.options('*',cors)

MongoClient.connect(mongourl, function(err, db){
    if(err) throw err
    console.log("Connected to Database")
    var dbo = db.db("buses")
    dbo.collection("routes").find({}).toArray(function(err,result){
        if (err) throw err;
        console.log(result)
        db.close()

    })
})



app.listen(
    PORT,
    () => console.log(`Server is running on https://localhost:${PORT}`)
)

app.get('/search', (req,res) => {
    const from = req.query.from;
    const to = req.query.to;
    console.log(`From  : ${from} Destination : ${to}`)
    res.set('Access-Control-Allow-Origin','http://localhost:3000')
    res.status(200).send({
        hello : "world"
    })

})



app.get('/busroute', (req,res) => {
    const id = req.query.id;
    console.log(`id is ${id}`)
    res.status(200).send("hello there")
})
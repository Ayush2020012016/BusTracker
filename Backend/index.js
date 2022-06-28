const app = require('express')();
const PORT = 4000;

app.listen(
    PORT,
    () => console.log(`Server is running on https://localhost:${PORT}`)
)

app.get('/search', (req,res) => {
    const from = req.query.from;
    const to = req.query.to;
    console.log(`From  : ${from} Destination : ${to}`)
    res.status(200).send({
        From : {from},
        To : {to}
    })

})

app.get('/busview', (req,res) => {
    res.status(200).send({
        Test : "Test"
    })
})


app.get('/busroute', (req,res) => {
    res.status(200).send({
        Test : "Test"
    })
})
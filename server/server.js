let express = require('express');
let app = express();
const PORT = process.env.PORT || 4001;
let bodyParser = require('body-parser');
const equationHistory = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

//APP.GET

//APP.POST
app.post('/equation', (req,res) => {
    let dataSubmitted = req.body;
    equationHistory.push(dataSubmitted)
    res.sendStatus(200);
})

//APP.LISTEN
app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})
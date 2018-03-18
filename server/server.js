let express = require('express');
let app = express();
const PORT = process.env.PORT || 4001;
let bodyParser = require('body-parser');
const equationHistory = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

//APP.GET
app.get('/equation', (req, res) => {
    res.send(equationHistory);
})

//APP.POST
app.post('/equation', (req,res) => {
    let dataSubmitted = req.body;
    calculateTotal(dataSubmitted); 
    equationHistory.push(dataSubmitted);
    console.log("datasubmitted", dataSubmitted);
    res.sendStatus(200);
})

//APP.LISTEN
app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})

function calculateTotal(operation) {
    if (operation.operator === "+") {
        let sum = parseInt(operation.firstNumber) + parseInt(operation.secondNumber);
        operation.total = sum;
        console.log("sum", sum);
    }
    else if (operation.operator === "-") {
        let difference = parseInt(operation.firstNumber) - parseInt(operation.secondNumber);
        operation.total = difference;
        console.log("difference", difference);
    }
    else if (operation.operator === "÷") {
        let quotient = parseInt(operation.firstNumber) / parseInt(operation.secondNumber);
        operation.total = quotient;
        console.log("quotient", quotient);
    }
    else if (operation.operator === "×") {
        let product = parseInt(operation.firstNumber) * parseInt(operation.secondNumber);
        operation.total = product;
        console.log("product", product);
    }
}
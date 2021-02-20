const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

require('dotenv').config({
    path: './config/config.env'
});

const app = express()

const razorRouter = require('./routers/razorpay');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello from node');
})

app.use('/api', razorRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
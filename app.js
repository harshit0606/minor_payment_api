const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const axios = require('axios')

require('dotenv').config({
    path: './config/config.env'
});

const app = express()

const razorRouter = require('./routers/razorpay');
const { token } = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(cors());


app.get('/', (req, res) => {
    res.send('hello from node');
    // sendSMS = (token, identity, smsContent, to) => {
    //     const formData = {
    //         token: 'v2_EGL7dVTCIxNbKtt4utmZjF9Da2p.dulV',
    //         from: 'Demo',
    //         to: to,
    //         text: smsContent
    //     }

    //     const encodeForm = (data) => {
    //         return Object.keys(data)
    //             .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    //             .join('&');
    //     }

    //     console.log(token + " " + identity + " " + to + " " + smsContent)
    //     axios
    //         .post('http://api.sparrowsms.com/v2/sms/', encodeForm(formData))
    //         .then(res => {
    //             console.log(res);
    //             let count = res.data.count;
    //             let response = res.data.response;
    //             let message_id = res.data.message_id
    //             let credit_consumed = res.data.credit_consumed
    //             let credit_available = res.data.credit_available

    //             let data = {
    //                 "error": false,
    //                 "count": count,
    //                 "message": response,
    //                 "message_id": message_id,
    //                 "credit_consumed": credit_consumed,
    //                 "credit_available": credit_available,
    //             }
    //             return data;
    //         })
    //         .catch(error => {
    //             console.log(error.response.data);
    //             let error_message = error.response.data.response;
    //             console.error(error_message);
    //             let data = {
    //                 "error": true,
    //                 "message": error_message
    //             }
    //             return data;
    //         })
    // }
    // sendSMS('v2_EGL7dVTCIxNbKtt4utmZjF9Da2p.dulV', 'Demo', 'fasd d ad asdf asd asd asd as a dasd as', '8077984660')

})

app.use('/api', razorRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

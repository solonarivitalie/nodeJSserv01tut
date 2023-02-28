const allowedOrigins = require('../config/allowedOrigins');

//if the origin that sends the req is in out allowedList set the following head on the res
//fixes browser error
const credentials = (req, res, next)=>{
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials
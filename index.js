let express = require('express');
var mongoose = require('mongoose');

// const { enquireyInsert, deletedEnquiry, enquireyList, enquiryUpdate } = require('./App/controller/web/userEnqueryController');
const enquiryRoutes = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();


// connect to MongoDB
let app = express();

app.use("/web/api/enquiry",enquiryRoutes)


mongoose.connect(process.env.DBURL).then(()=> {
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT,() => {
        console.log("Server is running on port" + process.env.PORT);
    })
})
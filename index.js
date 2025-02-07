let express = require('express')
var mongoose = require('mongoose');

const { enquireyInsert, deletedEnquiry, enquireyList, enquiryUpdate } = require('./App/controller/web/userEnqueryController');
require('dotenv').config();


// connect to MongoDB
let app = express();

app.use(express.json());
app.post('/api/enquiry-insert', enquireyInsert)

app.get("/api/enquiry-list", enquireyList)

app.delete("/api/enquiry-delete/:id", deletedEnquiry)

app.put("/api/enquiry-update/:id", enquiryUpdate)

mongoose.connect(process.env.DBURL).then(()=> {
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT,() => {
        console.log("Server is running on port" + process.env.PORT);
    })
})
const express = require("express");
const { enquireyInsert, enquireyList, deletedEnquiry, enquiryUpdate } = require("../../controller/web/userEnqueryController");
let enquiryRoutes=express.Router();

enquiryRoutes.post('/enquiry-insert', enquireyInsert)
enquiryRoutes.get("/enquiry-list", enquireyList)
enquiryRoutes.delete("/enquiry-delete/:id", deletedEnquiry)
enquiryRoutes.put("/enquiry-update/:id", enquiryUpdate)


module.exports=enquiryRoutes;
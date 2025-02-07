const enquiryModle = require("../../models/enquiry.model");

let enquireyInsert = (req, res) => {
    let {sName, sEmail, sPhone, sMessage } = req.body
    let enquiry = new enquiryModle({
        name: sName, 
        email: sEmail,
        phone: sPhone,
        message: sMessage
    });
    enquiry.save().then(()=>{
        res.send({status:1, message:"Enquiry saved successfully"});
    }).catch((err)=>{
        res.send({status:0, message:"Error while saving enquiry", error:err});
    })
}

let enquireyList = async(req, res) => {
        let enquireyList = await enquiryModle.find();
        res.send({status: 1, msg: "Enquiry list", data:enquireyList})
}

let deletedEnquiry = async (req, res) => {
    let enquireyList = await enquiryModle.find();
    res.send({status: 1, msg: "Enquiry list", data:enquireyList})
}

let enquiryUpdate = async (req, res) => {
    let enquireyId = req.params.id;
    let {sName, sEmail, sPhone, sMessage} = req.body;
    let updateObj = {
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    };
    let updateRes = enquiryModle.updateOne({_id: enquireyId}, updateObj)
    res.send({status: 1, message: "Enquired updated success", updateRes})
}

module.exports = {enquireyInsert, enquireyList, deletedEnquiry, enquiryUpdate}
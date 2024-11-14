const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = require('./employee');

const uri =  "mongodb://root:IJnL49E4up4KxVytqGp0mmbx@172.21.202.208:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

//insertOne record into employee
let newEmployee = new Employee({
    emp_name: 'John Doe',
    age: 37,
    location: "Illinois",
    email: "jdoe@somewhere.com"
});
newEmployee.save().then(function(){
    Employee.find().then((data)=>{
        console.log("\n\nDocuments in employees collection after insertOne")
        console.log(data);
        mongoose.connection.close();
    })
}).catch(function(error){
    console.log(error)
});
const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:IJnL49E4up4KxVytqGp0mmbx@172.21.202.208:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
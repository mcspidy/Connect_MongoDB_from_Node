const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:yj7AniYvDw4lIdCpZ70aACGC@172.21.119.69:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
const express=require("express");
const tasks=require('./routes/tasks');
const connectDB=require('./db/connect')
const mongoose=require('mongoose');
require('dotenv').config()

const app=express();



//connect to Mongo DB

connectDB();



//middleware
app.use(express.static('./public'));
app.use(express.json())

const PORT=process.env.PORT || 3000

//routes

app.use('/api/v1/tasks',tasks)
//app.use('/api/v1/tasks',tasks)
//app.use('/api/v1/tasks',tasks)
//app.use('/api/v1/tasks',tasks)




mongoose.connection.once('open',()=>{
    console.log(`mongo database is connected!!!`);
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`)
    }
    );
})

        

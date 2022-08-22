require('dotenv').config();
const express=require('express');
const app=express();
const cors=require("cors");
const connection=require('./db');
const authRoute=require("./routes/auth")

//database connection
connection();


//Middlewares
app.use(express.json())
app.use(cors());

app.use("/server/auth",authRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}....`);
});




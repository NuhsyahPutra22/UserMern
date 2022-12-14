const mongoose=require("mongoose");


module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("Connected to mongoDb database successfully");
        console.log("Database:  "+process.env.DB);
    }catch(error){
        console.log(error)
        console.log("Could not connect to mongodb database!");

    }
}
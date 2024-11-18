import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//dotenv config
dotenv.config();

//inititalize
const app = express();

//cors middleware
app.use(cors({
    origin:"*",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}));

//Default route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the API");
});

//port decalre
const PORT = process.env.PORT || 4000;

//start the server
app.listen(PORT, () => {
    console.log("Server is started and running succesfully");   
});

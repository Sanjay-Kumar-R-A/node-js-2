import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouters from "./Routers/productRouters.js";

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

//default middleware to use post method body
app.use(express.json());

//Default route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the API");
});
//Custom routes from Routers
app.use("/api/products", productRouters);


//port decalre
const PORT = process.env.PORT || 4000;

//start the server
app.listen(PORT, () => {
    console.log("Server is started and running succesfully");   
});

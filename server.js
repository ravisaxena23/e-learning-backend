import express  from 'express';
import collegeRoutes from "./routes/college.js"
import DatabaseController from "./database/DatabaseController.js"
import cors from "cors"

const app = express()
app.use(cors());

DatabaseController.initializeDB()

app.use(`/college`, collegeRoutes);
app.listen(8081,()=>{
    console.log("server started")
})
const express = require("express");
require("dotenv").config()
const cors = require("cors");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/User.route");
const { crudRoutes } = require("./routes/Form.route");

const app = express();

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use("/users",UserRouter)
app.use("/crud",crudRoutes)
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log({msg:"connected to DB"})
    } catch (error) {
        console.log({msg:`error while connecting DB ${error.message}`})
    }
    console.log({msg:`server is running on port ${process.env.PORT}`})
})
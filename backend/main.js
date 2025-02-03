import router from "./routes/teamroutes.js"
import express, { urlencoded } from "express"
import connectDB from "./lib/db.js"
import cors from 'cors'
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true }));
const port = 3000
app.use(cors())
app.use("/",router)
app.post('/',(req,res) => {
  res.status(200).json(req.body)
})
app.listen(port, () => {
  console.log(`Example app listening on port http/://localhost:${port}`)
})
connectDB();

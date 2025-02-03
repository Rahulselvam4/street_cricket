import express from "express"
import { TeamIndex, TeamCreate } from "../controllers/teamcontroller.js"
const router = express.Router()

router.get('/',TeamIndex)

router.post('/',TeamCreate)

export default router
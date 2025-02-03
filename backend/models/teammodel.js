import {Schema, model} from "mongoose";
const schema = new Schema({
    team1: String,
    team2: String,
    result: String,
    summary: String,
});
const Team =model("team",schema);
export default Team;
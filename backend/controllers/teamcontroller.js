import Team from "../models/teammodel.js";

export const TeamIndex = async(req,res) => {
    Team.find({})
    .then(teams => res.json(teams))
    .catch(err => res.json(err))
};

export const TeamCreate = async (req,res) => {
    const team = await new Team({
        team1:req.body.team1,
        team2:req.body.team2,
        result:req.body.result,
        summary:req.body.summary,
    }
);
    try{
        await team.save();
        res.status(200).json(team);
    }
    catch(error)
    {
        res.status({message:error.message});
    }
};



// Y9WJ7VTASNRpSIuW

// babyrahul47


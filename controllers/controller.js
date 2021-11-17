import members from '../Members.js';
import {v4 as uuid} from "uuid"
export const getMembers=(req, res) => {
    const idFound = members.some(member => member.id === parseInt(req.params.id));
    if (idFound) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`memebr with the id of ${req.params.id} is not found`})
    }

}

export const createMembers=(req, res) => {
   
    const member=req.body;
    const found = members.some(member => member.email === req.body.email);
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ msg: "pelase enter the required information" })
    } if (found) {
        return res.status(400).json({ msg: "the user already exist" })
    }
    members.push({id:uuid(),...member});

   //res.json(members)
   res.redirect('/')
}

export const putMembers=(req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        const updateMember=req.body;
        members.forEach(member=>{
            if(member.id===parseInt(req.params.id)){
                member.name=updateMember.name?updateMember:member.name
                member.email=updateMember.email?updateMember:member.email
            res.json({msg:'member updated',member})
            }
        })
    } else {
        res.status(400).json({msg:`memebr with the id of ${req.params.id} is not found`})
    }
}
export const deleteMember=(req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
       res.json({members:members.filter(member => member.id !== parseInt(req.params.id)),msg:`deletd user:${req.params.id}`});
    } else {
      res.status(400).json({msg:`memebr with the id of ${req.params.id} is not found`})
    }

}
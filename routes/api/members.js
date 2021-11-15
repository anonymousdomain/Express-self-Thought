const express = require('express')
const members = require('../../Members')
const uuid = require('uuid')
const router = express.Router();

router.get('/', (req, res) => res.json(members))

router.get('/:id', (req, res) => {
    const idFound = members.some(member => member.id === parseInt(req.params.id));
    if (idFound) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`memebr with the id of ${req.params.id} is not found`})
    }

})
//create a new member 
router.post('/', (req, res) => {
    const newMember =
    {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }
    const found = members.some(member => member.email === newMember.email);
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "pelase enter the required information" })
    } if (found) {
        return res.status(400).json({ msg: "the user already exist" })
    }
    members.push(newMember);

    res.json(members)
})

//update member

router.put('/:id',(req,res)=>{
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
})
//delete

router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
       res.json({msg:"member deleted",members:members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
      res.status(400).json({msg:`memebr with the id of ${req.params.id} is not found`})
    }

})
module.exports = router;


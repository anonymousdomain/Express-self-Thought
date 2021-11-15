const express=require('express')
const members = require('../../Members')
const router=express.Router();

router.get('/', (req, res) => res.json(members))

router.get('/:id', (req, res) => {
    const idFound = members.some(member => member.id === parseInt(req.params.id));
    if (idFound) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json(`memebr with the id of ${req.params.id} is not found`)
    }

})
module.exports=router;
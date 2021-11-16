import express from 'express';
import {getMembers,createMembers,putMembers,deleteMember} from "../../controllers/controller.js"


const router = express.Router();
//get request
router.get('/', (req, res) => res.json(members))

router.get('/:id',getMembers)

//create a new member 
router.post('/',createMembers)

//update member
router.put('/:id',putMembers)
//delete
router.delete('/:id', deleteMember)
export default router;


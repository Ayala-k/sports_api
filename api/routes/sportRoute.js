const express = require("express");
const sportsArr=require('../data/professions.json')


const router = express.Router();

router.get('',(req,res)=>{
    try{
        res.json(sportsArr)
    }
    catch(err){
        res.status(400).json('ERROR')
    }
})

router.get('/data',(req,res)=>{
    try{
        res.json({profession:"trainer",specializations:sportsArr})
    }
    catch(err){
        res.status(400).json('ERROR')
    }
})

module.exports = router;

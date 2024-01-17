const express = require("express");
const sportsArr=require('../data/professions.json')


const router = express.Router();

router.get('',(req,res)=>{
    try{
        res.json({data:sportsArr,code:0})
    }
    catch(err){
        res.status(400).json({data:'ERROR',code:101})
    }
})

router.get('/data',(req,res)=>{
    try{
        res.json({data:{profession:"trainer",specializations:sportsArr},code:0})
    }
    catch(err){
        res.status(400).json({data:'ERROR',code:101})
    }
})

module.exports = router;

const express = require ('express')

const router = express.Router()

//Get all routes
router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts'})
})

//Get a single route
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single workout'})
})

//Post a new workout
router.post('/',(req,res)=>{
    res.json({mssg:'Post a new workout'})
})

//Delete a signle workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a workout'})
})

//Update a signle workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a workout'})
})


module.exports = router
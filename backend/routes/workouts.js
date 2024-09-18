const express = require ('express')
const Workout = require('../models/WorkoutModel')

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
router.post('/',async (req,res)=>{
    const {title,load,reps} = req.body

    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

    // res.json({mssg:'Post a new workout'})
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
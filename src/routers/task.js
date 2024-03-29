const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    //console.log("hey6")
    
    const description = req.body.description
    const completed = req.body.completed
    const date = req.body.date

    const task = new Task({description: description, completed: completed, date: date})
    try {
        await task.save()
        //res.status(201).send(task)
        //console.log("yee")
        
    } catch (e) {
        res.status(400).send(e)
    }
    return res.redirect('back');
})

router.get('/tasks', async (req, res) => {
   console.log("get called",res)
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

// router.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id
// console.log("get called id")
//     try {
//         const task = await Task.findById(_id)

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.get('/tasks',async(req,res)=>{
//     const typeOfTask=req.query.typeOfTask;
//     const xx =await Task.find({
//         "typeOfTask": flag                                // search all post with given query string (here we are searching by flag)
//     })
//     res.send(xx)
// })


router.put('/updateTasks', async (req, res) => {
    //console.log("hey6")
    
    const newDescription = req.body.newDescription;
    const newCompleted = req.body.newCompleted;
    const id=req.body.id;
    //const date = req.body.date
    console.log(req.body)
    console.log(id)

    //const task = new Task({description: description, completed: completed, date: date})
    try {
        console.log("uodate try")
         await Task.findById(id, (e,updatedTask)=>{
            updatedTask.description= newDescription
            updatedTask.completed= newCompleted
            updatedTask.save()
            res.send("updated")

         })
        //res.status(201).send(task)
        //console.log("yee")
        
    } catch (e) {
        res.status(400).send(e)
    }
    //return res.redirect('back');
})

// router.patch('//:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed','date']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

router.put("/deleteTasks", async (req,res)=>{
    console.log(req.body)
    const id= req.body.id;
    console.log(id)
await Task.findByIdAndRemove(id).exec();

    res.send("deleted")
})

// router.post('/deleteTask', async (req, res) => {
//     var id = req.body;

//     var count = Object.keys(id).length;
//     for(let i=0; i < count ; i++){
        
//         Task.findByIdAndDelete(Object.keys(id)[i], function(err){
//         if(err){
//             console.log('error in deleting task');
//             }
//         })
//     }
//     return res.redirect('back'); 
// })


module.exports = router
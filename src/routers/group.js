const express = require('express')
const Group = require('../models/group')
const router = new express.Router()


router.post('/creategroup', async (req, res) => {
    const group = new Group(req.body)
//console.log("tttt")
    try {
        await group.save()
        res.status(201).send(group)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/creategroup', async (req, res) => {
    try {
        var id = req.query;
        var count = Object.keys(id).length;
        for(let i=0; i < count ; i++){
        const task = await Task.findByIdAndDelete(Object.keys(id)[i])

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    }
    } catch (e) {
        res.status(500).send()
    }
 
})

    // router.patch('/creategroup', async (req, res) => {
    //     // var count = Object.keys(req.body)[0].length;
       
    //     // for(let i=0; i < count ; i++){
    //     // const updates = Object.keys(req.body)
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
    //}
   //})



module.exports = router
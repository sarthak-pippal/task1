const express = require('express')
const Group = require('../models/group')
const Task = require('../models/task')
const router = new express.Router()


router.get('/getGroup', async (req, res) => {
    console.log("get request ")
    try {
        
        const group = await Group.find({
            
        })
        res.send(group)
    } catch (e) {
        res.status(500).send()
    }
})


router.post('/createGroup', async (req, res) => {
    const group = new Group(req.body)

    try {
        
        await group.save()
        res.status(201).send(group)
        
    } catch (e) {
        res.status(400).send(e)
    }
})


router.post('/deleteGroup',async(req,res)=>{
    
    const group = await Group.find({name:req.body.name});
    console.log(group)

    var arr=group[0].userIds
   
    for(var i=0; i<arr.length; i++ )
    {
       
       await Task.findByIdAndDelete(arr[i] , function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    const result=await Group.deleteMany({name:req.body.name})                // delete all posts
    res.json(result)

    res.status(200).send()
})

router.post('/updateGroup',async(req,res)=>{
    
    const group = await Group.find({name:req.body.name})
    
    var arr=group[0].userIds
    
    for(var i=0; i<arr.length; i++ )
    {
       
       await Task.findByIdAndUpdate(arr[i] ,{completed:"true"}, function(err){
        if(err){
            console.log('error in updating task');
            }
         else{
             console.log("updated")
         }

        })
    }
    
    res.status(200).send()
})


module.exports = router
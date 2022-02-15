const express = require('express')
const Group = require('../models/group')
const Task = require('../models/task')
const router = new express.Router()

var arr=[];

router.get('/getGroup2', async(req, res) => {
    console.log("get request ")
    try {
        //res.send(arr)
        var arra=[];
        for(var i=0; i<arr.length;i++)
        {
          const task = await Task.findById(arr[i])
          arra.push(task);
        }

        res.send(arra)
    } catch (e) {
        res.status(500).send()
    }
})


router.post('/createGroup2', async (req, res) => {
    const id = req.body.id

    try {
        
        arr.push(id)
        console.log("id pushed into group")
        // for(var i=0; i<arr.length; i++)
        // {
        //     console.log(arr[i]);
        // }
        res.status(201).send(arr)
        
    } catch (e) {
        res.status(400).send(e)
    }
})


router.put('/deleteGroup2',async(req,res)=>{
    
    // const group = await Group.find({name:req.body.name});
    // console.log(group)

    //var arr=group[0].userIds
   console.log("deleted group")
    for(var i=0; i<arr.length; i++ )
    {
       
       await Task.findByIdAndDelete(arr[i] , function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    arr=[];
   // const result=await Group.deleteMany({name:req.body.name})                // delete all posts
    //res.json(result)

    res.status(200).send()
})

router.put('/updateGroup2',async(req,res)=>{
    
   // const group = await Group.find({name:req.body.name})
    
    //var arr=group[0].userIds
    console.log("update backend")
    for(var i=0; i<arr.length; i++ )
    {
       
       await Task.findByIdAndUpdate(arr[i] ,{completed:"completed"}, function(err){
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
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const groupRouter = require('./routers/group')
const bodyParser = require('body-parser')
const cors = require('cors')

const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 8080

// app.use(express.static("../views"));
app.use(express.urlencoded());
//app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())
//frontend
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

app.get('/getTasks', async (req, res)=>{
    console.log("home called")
    Task.find({}, (err, task)=>{
        if(err){
            console.log('Error in fetching tasks from db');
            res.send(err)
        }

        // return res.render('home', {
        //     title: "Home",
        //     task: task
        res.send(task)
        });
    
});


// app.post('/tasks', async (req, res) => {
//     console.log("hey")
    
//     const description = req.body.description
//     const completed = req.body.completed
//     const date = req.body.date

//     const task = new Task({description: description, completed: completed, date: date})
//     try {
//         await task.save()
//         //res.status(201).send(task)
//         console.log("yee")
        
//     } catch (e) {
//         res.status(400).send(e)
//     }
//     return res.redirect('back');
// })

//app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(groupRouter)


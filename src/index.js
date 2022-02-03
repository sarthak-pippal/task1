const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const groupRouter = require('./routers/group')

const app = express()
const port = process.env.PORT || 80

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(groupRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
import express from 'express'
import { getAllStudents, addStudent } from './src/students.js'

const app = express()
const port = 3001

app.get("/students", getAllStudents)
app.post("/students", addStudent)

app.get('/students', (request, response ) => {
    response.send("created new Student")
})


app.get('/user/:name',(req,res) => {
    res.send(req.params.name)
})

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})




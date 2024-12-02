import express from 'express'
import "dotenv/config"
const app = express()
const port = process.env.PORT || 3000

const family = [
  {
    "name":"Ethesham Haider",
    "position":"dad",
    "workflow":"Business"
  },
  {
    "name":"Uzma Haider",
    "position":"mom",
    "workflow":"House-Wife"
  },
  {
    "name":"Faraz Haider",
    "position":"son",
    "workflow":"Student"
  },
  {
    "name":"Alishan",
    "position":"son",
    "workflow":"Student"
  },
  {
    "name":"Uzair Raza",
    "position":"son",
    "workflow":"Student"
  },

]

app.get('/', (req, res) => {
  res.send('Hello World, i am faraz')
})
app.get("/thunder", (req, res) => {
  res.send('Hello World, i am thunder blood')
})

//showing the data of the object to the backend server
app.get("/familyInfo", (req, res) => {
  res.send(family)
})

app.listen(port, (req, res) => {
  console.log(`Server running on port localhost:${port}`)
})
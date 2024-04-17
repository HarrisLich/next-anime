require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const { genPassword, validPassword } = require('./lib/passwordUtils')

mongoose.set({strictQuery: false})
mongoose.connect(process.env.harrisdbString)

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post("/login", async (req, res) => {
    const data = req.body
    const password = data.password
    const username = data.username
    try {
        const check = await User.findOne({ username: username })
        hash = check.hash
        salt = check.salt
        const passwordCheck = validPassword(password, hash, salt)
        if (check && passwordCheck) {
            res.json({status: true})
        } else {
            res.json({status: false})
        }

    } catch (e) {
        console.log(e)
    }
})

app.post("/register", async (req, res) => {
    try {
        const data = req.body
        const password = genPassword(data.password)
        const salt = password.salt
        const hash = password.hash
        const username = data.username
        let user = new User()
        user.username = username
        user.hash = hash
        user.salt = salt
        user.animeList = []
        const registerUser = await user.save().then((user) => {
            console.log(user)
        })
        res.json({ status: true })
    } catch (e) {
        res.json({ status: false })
    }


})

const port = process.env.PORT || 80
app.listen(port, ()=> console.log(`listening on port: ${port}`))
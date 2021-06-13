const express = require("express")
const path = require("path")
const app = express()
const morgan = require("morgan")

app.use(morgan("dev"))

// static middleware
app.use(express.static(path.join(__dirname, "../public")))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/auth", require("./auth"))
app.use("/api", require("./api"))

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./path/to/index.html"))
})

const port = process.env.PORT || 3000
app.listen(port, function () {
	console.log("Knock, knock")
	console.log("Who's there?")
	console.log(`Your server, listening on port ${port}`)
})

app.use(function (err, req, res, next) {
	console.log(err)
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || "Internal server error.")
})

module.exports = app

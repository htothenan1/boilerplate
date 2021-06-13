const router = require("express").Router()
const {
	models: { Owner },
} = require("../db")
module.exports = router

router.post("/login", async (req, res, next) => {
	try {
		res.send({ token: await Owner.authenticate(req.body) })
	} catch (err) {
		next(err)
	}
})

router.post("/signup", async (req, res, next) => {
	try {
		const owner = await Owner.create(req.body)
		res.send({ token: await Owner.generateToken() })
	} catch (err) {
		if (err.name === "SequelizeUniqueConstraintError") {
			res.status(401).send("User already exists")
		} else {
			next(err)
		}
	}
})

router.get("/me", async (req, res, next) => {
	try {
		res.send(await Owner.findByToken(req.headers.authorization))
	} catch (ex) {
		next(ex)
	}
})

const router = require("express").Router()

router.use("/owners", require("./owners"))
router.use("/kittens", require("./kittens"))
router.use("/puppies", require("./puppies"))

router.use(function (req, res, next) {
	const err = new Error("Not found.")
	err.status = 404
	next(err)
})

module.exports = router

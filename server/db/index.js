const db = require("./db")
const Owner = require("./owners")
const Puppy = require("./puppies")

Puppy.belongsTo(Owner)
Owner.hasMany(Puppy)

module.exports = {
	db,
	Owner,
	Puppy,
}

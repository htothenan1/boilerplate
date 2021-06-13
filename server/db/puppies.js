const Sequelize = require("sequelize")
const db = require("./db")

module.exports = db.define("puppy", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	breed: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	color: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	weightInLbs: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
})

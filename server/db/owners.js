const Sequelize = require("sequelize")
const db = require("./db")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const axios = require("axios")

const SALT_ROUNDS = 5

const Owner = db.define("owner", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			isEmail: true,
		},
	},
	username: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
	},
})

module.exports = Owner

Owner.prototype.correctPassword = function (candidatePwd) {
	return bcrypt.compare(candidatePwd, this.password)
}

Owner.prototype.generateToken = function () {
	return jwt.sign({ id: this.id }, process.env.JWT)
}

Owner.authenticate = async function ({ username, password }) {
	const user = await this.findOne({ where: { username } })
	if (!user || !(await user.correctPassword(password))) {
		const error = Error("Incorrect username/password")
		error.status = 401
		throw error
	}
	return user.generateToken()
}

Owner.findByToken = async function (token) {
	try {
		const { id } = await jwt.verify(token, process.env.JWT)
		const user = User.findByPk(id)
		if (!user) {
			throw "nooo"
		}
		return user
	} catch (ex) {
		const error = Error("bad token")
		error.status = 401
		throw error
	}
}

const hashPassword = async (owner) => {
	//in case the password has been changed, we want to encrypt it with bcrypt
	if (owner.changed("password")) {
		owner.password = await bcrypt.hash(owner.password, SALT_ROUNDS)
	}
}

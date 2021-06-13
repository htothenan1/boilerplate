const { db, Owner, Puppy } = require("./server/db")

const seed = async () => {
	try {
		await db.sync({ force: true })

		await Promise.all([
			Owner.create({
				firstName: "The artist AKA",
				lastName: "Prince",
				email: "purplerain@email.com",
			}),
			Owner.create({
				firstName: "Kim",
				lastName: "Kardashian",
				email: "kimk@richerthanyou.com",
			}),
			Owner.create({
				firstName: "Justin",
				lastName: "Bieber",
				email: "babybabybabyoh@bielieber.com",
			}),
			Owner.create({
				firstName: "Vanilla",
				lastName: "Ice",
				email: "iceicebaby@onehitwonder.com",
			}),
			Owner.create({
				firstName: "Mike",
				lastName: "Tyson",
				email: "mike@tython.com",
			}),
			Owner.create({
				firstName: "Marshall",
				lastName: "Mathers",
				email: "theRealSlimShady@eminem.com",
			}),
			Owner.create({
				firstName: "Jeremy",
				lastName: "Meeks",
				email: "theHotFelon@email.com",
			}),
			Owner.create({
				firstName: "Keanu",
				lastName: "Reeves",
				email: "Neo@theMatrix.com",
			}),
			Owner.create({
				firstName: "Bruno",
				lastName: "Mars",
				email: "becauseImHappy@email.com",
			}),
		])

		await Promise.all([
			Puppy.create({
				name: "Winston",
				breed: "Rottweiler/Greater Swiss Mtn",
				color: "black",
				weightInLbs: 75,
				ownerId: 1,
			}),
			Puppy.create({
				name: "Nana",
				breed: "Mini Poodle",
				color: "tan",
				weightInLbs: 20,
				ownerId: 2,
			}),
			Puppy.create({
				name: "Dewie",
				breed: "Golden Retriever",
				color: "yellow",
				weightInLbs: 55,
				ownerId: 2,
			}),
			Puppy.create({
				name: "Billie",
				breed: "Rottweiler/Greater Swiss Mtn",
				color: "black",
				weightInLbs: 15,
				ownerId: 3,
			}),
		])
	} catch (err) {
		console.log(err)
	}
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
	seed()
		.then(() => {
			console.log("Seeding success!")
			db.close()
		})
		.catch((err) => {
			console.error("Oh noes! Something went wrong!")
			console.error(err)
			db.close()
		})
}

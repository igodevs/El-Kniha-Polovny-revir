const jwt = require('jsonwebtoken');

const redisClient = require('./signin').redisClient;


const handleRegister = (db, bcrypt, req, res) => {
	const {email, name, password} = req.body;
	if(!email || !name || !password){
		return Promise.reject("incorrect form submission");
	}
	const hash = bcrypt.hashSync(password);
	return db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return trx('users')
			.returning('*')
			.insert({
				email: loginEmail[0],
				name: name,
				joined: new Date()
			})
			.then(user => user[0])
			.catch(err => Promise.reject('unable to get user'))
		})
		.then(trx.commit)
		.catch(trx.rollback)
	})
	.catch(err => Promise.reject("unabel to register"))
	
}

const getAuthTokenId = (req, res) => {
	const  { authorization } = req.headers;
	return redisClient.get(authorization, (err, reply) =>{
		if (err || !reply){
			return res.status(400).json("Unauthorized");
		}
		return res.json({id: reply})
	})
}

const signToken = (email) => {
	const jwtPayload = { email };
	return jwt.sign(jwtPayload, 'JWT_SECRET', { expiresIn: '2 days' });
}

const setToken = (key, value) => {
	//return promise need instal external libray 
	return Promise.resolve(redisClient.set(key, value))
}

const createSessions = (user) => {
	//this function create a session user
	//JWT toke, return user data
	//install jsonwebtoken
	const { email, id } = user;
	const token = signToken(email);
	return setToken(token, id)
		.then(() => {
			return { success: 'true', userId: id, token }
		})
		.catch(console.log)
}

const registerAuthentification = (db, bcrypt) => (req, res) => {
	const { authorization } = req.headers;
	return authorization ? 
		getAuthTokenId(req, res) : 
		handleRegister(db, bcrypt, req, res)
		.then(data => {
			return data.id && data.email ? createSessions(data) : Promise.reject(data)
		})
		.then(session => res.json(session))
		.catch(err => res.status(400).json(err))
}

const registerPZ = (req, res, db) => {
	const { name_pz } = req.body;
	let new_name_pz = name_pz.replace(/\s/g, "_");
	let lower_name_pz = new_name_pz.toLowerCase()
	console.log(lower_name_pz)
	db.schema.createTable(`book_${lower_name_pz}`, (table) => {
		table.increments()
		table.integer('id_user').notNullable();
		table.text('email').notNullable();
		table.text('date').notNullable();
		table.text('insert_time').notNullable();
		table.text('time').notNullable();
		table.string('name', 100).notNullable();
		table.string('guest_name', 70).notNullable();
		table.string('location', 40).notNullable();
		table.string('hunting_method', 30).notNullable();
		table.string('species_gender', 30);
		table.specificType('count', 'smallint');
		table.string('time_location', 50);
		table.string('u_n', 8);
		table.string('tag_number', 50),
		table.text('other');

	})
	.then(resp => {

		
			res.status(200).json('registration_success')
		
		
	})

	.catch(err => res.status(400).json('error create table'))

	// db.schema.createTable(`announcements_${lower_name_pz}`, (table) => {
	// 	table.increments()
	// 	table.integer('id_user').notNullable();
	// 	table.string('name', 100).notNullable();
	// 	table.string('function_pz', 40).notNullable();
	// 	table.text('ann').notNullable();
	// 	table.text('file');

	// })
	// .then(data => db.commit(data))
	// .then(resp => res.status(200).json('registration pz ok'))
	// .catch(err => res.status(400).json('error register pz'))
	// .catch(err => res.status(400).json(err));
	// setTimeout(() => {
	// 	db.select('*')
	// .from(`book_${lower_name_pz}`)
	// .then(data => console.log("data", data))
	// .catch(err => console.log("err",err))
	// }, 100);
		
}

const createTableAnn = (req, res, db) => {
	const { name_pz } = req.body;
	let new_name_pz = name_pz.replace(/\s/g, "_");
	let lower_name_pz = new_name_pz.toLowerCase()

	db.schema.createTable(`announcements_${lower_name_pz}`, (table) => {
		table.increments()
		table.integer('id_user').notNullable();
		table.string('name', 100).notNullable();
		table.string('function_pz', 40).notNullable();
		table.text('ann').notNullable();
		table.text('file');

	})
	.then(resp => res.status(200).json('success'))
	.catch(err => res.status(400).json('error register pz'))
	// .catch(err => res.status(400).json(err));
	// setTimeout(() => {
	// 	db.select('*')
	// .from(`book_${lower_name_pz}`)
	// .then(data => console.log("data", data))
	// .catch(err => console.log("err",err))
	// }, 100);
		
}

const registerUsers = (req, res, db, bcrypt) => {
	const { users, name_pz } = req.body;
	const password = 'heslo';

	const hash = bcrypt.hashSync(password);
	// .catch(err => res.status(400).json(err));
	// setTimeout(() => {
	// 	db.select('*')
	// .from(`book_${lower_name_pz}`)
	// .then(data => console.log("data", data))
	// .catch(err => console.log("err",err))
	// }, 100);

	// console.log(users.length);
	let count = 0;
	users.map((user, i) => {
		console.log(users[i].user.name)
		db.insert({
				hash: hash,
				email: users[i].user.email
			})
			.into('login')
			.then(db.commit)
			.catch(db.rollback)

		db.insert({
				name: users[i].user.name,
				email: users[i].user.email,
				name_pz: name_pz,
				function_pz: users[i].user.function_pz,
				joined: new Date(),
			})
			.into('users')
			.then(res => {
				db.commit
				count += 1;
				console.log(count)
			})
			.catch(db.rollback)
		})

	
	setTimeout(() => {
		console.log("count", count)
		console.log("users", users.length)
		if(count === users.length){
			res.status(200).json('success')
		} else {
			res.status(400).json('error')
		}
	}, 200);
	
	
		
}



module.exports = {
	registerAuthentification: registerAuthentification, registerPZ, createTableAnn, registerUsers
}
const handleProfileGet = (req, res, db) => {
	const {id} = req.params;
	db.select('*').from('users').where({
		id: id
	}).then(user => {
		if(user.length){
			res.json(user[0])
		} else{
			res.status(400).json('not found')
		}	
	})
}

const handleProfileUpdate = (req, res, db) => {
	const {id} = req.params;
	const {location, hunting_method}  = req.body.formInput;
	db('users')
	.where({ id })
	.update({location, hunting_method})
	.then( resp => {
		if (resp) {
			res.json("success");
		} else {
			res.status(400).json("Unable to update");
		}
	})
	.catch(err => res.status(400).json("error updating user"))
}

const handlePasswordUpdate = (req, res, db, bcrypt) => {
	const {id} = req.params;
	const { old_password, new_password_2} = req.body.formInput;
	console.log(id)
	console.log(old_password, new_password_2)
	db.select('id', 'email', 'hash').from('login')
	.where('id', '=', id)
	.then(data => {
		const isValid = bcrypt.compareSync(old_password, data[0].hash)
		// console.log(isValid)
		// res.status(200).json(isValid)
		if(isValid) {
			const hash = bcrypt.hashSync(new_password_2);
			db('login')
			.where({id})
			.update({hash})
			.then(( resp => {
				if (resp) {
					res.json(resp);
				} else {
					res.status(400).json("Unable to update password");
				}
			}))
			.catch(err => res.status(400).json("Unable to update password 2"))
		}
	})
	.catch(err => res.status(400).json('Unable to update password 3'))

}

const profileBookGet = (req, res, db) => {
	const { id_user, name_pz, offsetData } = req.params;
	let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
	db.select('id', 'id_user','date', 'insert_time', 'time', 'name', 'location', 'hunting_method')
	.from(`book_${lower_name_pz}`)
	.where({id_user})
	.orderBy('date', 'desc')
	.orderBy('time', 'desc')
	.limit(5)
    .offset(offsetData)
	.then(data => {
		res.json(data)
	})
	.catch(err => res.status(400).json(err))

     
}

const profileBookUpdate = (req, res, db) => {
	const { id } = req.params;
	const {id_user, email, name_pz, date, insert_time, time, name, location, hunting_method} = req.body;
	let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
	db(`book_${lower_name_pz}`)
	.where({ id })
	.update({id_user, email, date, insert_time, time, name, location, hunting_method})
	.then( resp => {
		if (resp) {
			res.json("success");
		} else {
			res.status(400).json("Unable to update");
		}
	})
	.catch(err => res.status(400).json("error updating user"))

}

const getNumberOfMyBookItems = (req, res, db) => {
	const {id_user, name_pz} = req.params;
	let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    db(`book_${lower_name_pz}`)
    .count('id')
    .where({id_user})
    .then(data => res.json(data))
    .catch(err => res.status(400).json('error'))
}


module.exports = { handleProfileGet, handleProfileUpdate, handlePasswordUpdate, profileBookGet, profileBookUpdate, getNumberOfMyBookItems }
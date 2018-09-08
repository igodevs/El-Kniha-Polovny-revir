const getNumberOfBookItems = (req, res, db) => {
    const {name_pz} = req.params;
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    db(`book_${lower_name_pz}`)
    .count('id')
    .then(data => res.json(data))
    .catch(err => res.status(400).json('error'))
}

const handleBookGet = (req, res, db) => {
    const { name_pz, function_pz, limitData, offsetDataTable } = req.params;
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    console.log(req.params)
    if(function_pz === 'Hospodár'){
        db.select('date', 'insert_time', 'time', 'name', 'guest_name', 'location', 'hunting_method',
         'species_gender', 'count', 'time_location', 'u_n', 'tag_number', 'other')
        .from(`book_${lower_name_pz}`)
        .orderBy('date', 'asc')
        .orderBy('time', 'desc')
        .limit(limitData)
        .offset(offsetDataTable)
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(400).json(err))
    } else {
        db.select('date', 'time', 'name', 'guest_name', 'location', 'hunting_method',
        'species_gender', 'count', 'time_location', 'u_n', 'tag_number', 'other')
        .from(`book_${lower_name_pz}`)
        .orderBy('date', 'asc')
        .orderBy('time', 'desc')
        .limit(limitData)
        .offset(offsetDataTable)
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(400).json(err))
    }
     
}

const handleBookPost = (req, res, db) => {
    const {id_user, email, name_pz, date, insert_time, time, name, location, hunting_method, guest_name} = req.body;
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    db.insert({
            id_user: id_user,
            email: email,
            date: date,
            insert_time: insert_time,
            time: time,
            name: name,
            location: location,
            hunting_method: hunting_method,
            guest_name: guest_name
        }).into(`book_${lower_name_pz}`)
        .then(resp => res.json("ok"))
        .catch(err => res.status(400).json("no1"))
    // db("book").insert({
    //             date: date,
    //             time: time,
    //             email: email,
    //             location: location,
    //             hunting_method: hunting_method
    //         })
    //         .then( resp => {
    //             if (resp){
    //                 res.json("success")
    //             } else {
    //                 res.status(400).json("Unabble to insert")
    //             }
    //         })
    //         .catch(err => res.status(400).json("error"))
}

const lastInsertToBookGet = (req, res, db) => {
    const {id_user, name_pz} = req.params;
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    console.log("CONSOLE",name_pz, new_name_pz)
    db.select('*')
    .from(`book_${lower_name_pz}`)
    .where({id_user})
    .orderBy('date', 'asc')
    .orderBy('time', 'desc')
    .limit(1)
    .then(date => res.json(date))
    .catch(err => res.status(400).json('Unabble to get date'))
}

const leaveTheDistrict = (req, res, db) => {
    const {id, name_pz, time, count, species_gender, time_location, u_n, tag_number, other}  = req.body;
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    db(`book_${lower_name_pz}`)
	.where({ id })
	.update({time, count, species_gender, time_location, u_n, tag_number, other})
	.then( resp => {
		if (resp) {
			res.json("success");
		} else {
			res.status(400).json("Unable to update");
		}
	})
	.catch(err => res.status(400).json("error updating user"))

}

module.exports = {getNumberOfBookItems, handleBookGet , handleBookPost, lastInsertToBookGet, leaveTheDistrict}
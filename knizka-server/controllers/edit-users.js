const getUsers = (req, res, db) => {
     const {name_pz} = req.params;
    db.select('id', 'name', 'function_pz')
    .from('users')
    .where({name_pz})
    .then(data => {
		res.json(data)
	})
    .catch(err => res.status(400).json('error'))
}

module.exports = {getUsers }
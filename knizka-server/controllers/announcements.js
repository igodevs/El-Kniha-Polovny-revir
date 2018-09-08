const getNumberOfAnnouncementItems = (req, res, db) => {
    const {name_pz} = req.params;
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    db(`announcements_${lower_name_pz}`)
    .count('id')
    .then(data => res.json(data))
    .catch(err => res.status(400).json('error'))
}
const handleAnnouncementPost = (req, res, db) => {
    const {id_user, name_pz, name, function_pz, ann, file} = req.body;
    console.log(id_user, name_pz, name, function_pz, ann, file);
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    // res.status(200).json('ok');
    db.insert({
        id_user,
        name,
        function_pz,
        ann,
        file
    }).into(`announcements_${lower_name_pz}`)
    .then(resp => res.json("ok"))
    .catch(err => res.status(400).json("no1"))
}

const handleAnnouncementGet = (req, res, db) => {
    const {name_pz, offsetDataAnnouncements} = req.params;
    let new_name_pz = name_pz.replace(/\s/g, "_");
    let lower_name_pz = new_name_pz.toLowerCase()
    db.select('*')
    .from(`announcements_${lower_name_pz}`)
    .orderBy('id', 'desc')
    .limit(5)
    .offset(offsetDataAnnouncements)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Unable to get data'))
}

module.exports = {getNumberOfAnnouncementItems, handleAnnouncementPost, handleAnnouncementGet}
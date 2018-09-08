const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');
const compression = require('compression');
const multer = require('multer');


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API);


const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const auth = require('./controllers/authorization');
const book = require('./controllers/book');
const announcements = require('./controllers/announcements');
const db = knex({
    client: 'pg',
    // connection: {
    //     host: '127.0.0.1',
    //     user: 'igor',
    //     password: '',
    //     database: 'knizkaDB'
    // }
    connection: process.env.POSTGRES_URI
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    
    filename: (req,file, cb) => {
        // const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        console.log("file", file);
        // console.log("")
        const newFilename = `${file.originalname}`;
        cb(null, newFilename);
    }
});

const upload =  multer({ storage });


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'))
app.use(compression())

app.get('/', (req, res) => {
    res.send('Working!')
})

app.post('/signin', signin.signinAuthentification(db, bcrypt))
app.post('/register', register.registerAuthentification(db, bcrypt))
app.get('/profile/:id', auth.requireAuth, (req, res) => {profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) => {profile.handleProfileUpdate(req, res,db)})
app.post('/profilePassword/:id', auth.requireAuth, (req, res) => {profile.handlePasswordUpdate(req, res, db, bcrypt)})
app.get('/numberOfRowsBook/:name_pz', auth.requireAuth, (req, res) => {book.getNumberOfBookItems(req, res, db)})
app.get('/book/:name_pz/:function_pz/:limitData/:offsetDataTable', auth.requireAuth, (req, res) => {book.handleBookGet(req, res, db)})
app.post('/book', (req, res) =>{book.handleBookPost(req, res, db)})
app.get('/bookInsert/:id_user/:name_pz', auth.requireAuth, (req,res) => {book.lastInsertToBookGet(req,res,db)})
app.get('/myBook/:id_user/:name_pz/:offsetData', auth.requireAuth, (req, res) => {profile.profileBookGet(req, res, db)})
app.post('/myBook/:id', auth.requireAuth, (req, res) => {profile.profileBookUpdate(req, res, db)})
app.get('/numberOfRowsMyBook/:id_user/:name_pz', auth.requireAuth, (req, res) => {profile.getNumberOfMyBookItems(req, res, db)})
app.post('/myBookLeave', auth.requireAuth, (req, res) => {book.leaveTheDistrict(req,res,db)})


app.post('/announcements',upload.single('selectedFile'), (req, res) => {

    res.send();
});

app.get('/announcementsD/:selectedFile', (req, res) => {
    const {selectedFile} = req.params;
    console.log(selectedFile);
    res.download(`./uploads/${selectedFile}`);
});

app.post('/announcementsData', auth.requireAuth, (req, res) => {announcements.handleAnnouncementPost(req,res, db)})
app.get('/announcementsData/:name_pz/:offsetDataAnnouncements', auth.requireAuth, (req, res) => {announcements.handleAnnouncementGet(req,res, db)})
app.get('/numberOfRowsAnnouncements/:name_pz', auth.requireAuth, (req, res) => {announcements.getNumberOfAnnouncementItems(req, res,db)})


//sendgrid
app.post('/contactus',  (req, res) => {
    const {name, email, text} = req.body;
    if(name != '' && email != '' && text != '') {
        const msg = {
        to: 'igodevs@gmail.com',
        from: `${name} <${email}>`,
        subject: 'Správa zaslaná z kontaktného formulára ElKnizka',
        text: text,

      };
      sgMail.send(msg);
        res.status(200).json('ok')

    }
    else{
        res.status(400).json('error');
    }
    
})

app.post('/registerPZ', (req, res) => {register.registerPZ(req, res, db)})
app.post('/createTableAnn', (req, res) => {register.createTableAnn(req, res, db)})
app.post('/registerUsers', (req, res) => {register.registerUsers(req, res, db, bcrypt)})

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${3000}`);
})



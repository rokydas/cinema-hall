const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config()

const user = process.env.USER;
const password = process.env.PASSWORD
const db = process.env.DB_NAME;

const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const uri = `mongodb+srv://${user}:${password}@cluster0.muwip.mongodb.net/${db}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {

        const movies = client.db("cinema-hall").collection("movies");

        app.get('/', (req, res) => {
                res.send('Hello I am your new node js project');
        })

        app.get('/movies', (req, res) => {
                movies.find({})
                        .toArray((err, documents) => {
                                res.send(documents);
                        })
        })

        // app.post('/insert', (req, res) => {
        //         movies.insertOne(req.body)
        //                 .then(result => {
        //                         res.send(result.insertedCount > 0)
        //                 })
        // })

        app.post('/update', (req, res) => {
                const movie = req.body.movie;
                const id = req.body.id;

                // console.log(movie, id);

                const { name, img, date, time, sits } = movie;

                movies.updateOne({ _id: ObjectId(id) }, {
                        $set: { name: name, img: img, date: date, time: time, sits: sits }
                })
                        .then(result => {
                                res.send(result.modifiedCount > 0);
                        })
                        .catch(err => console.log(err));

        });

        app.post('/makeAllAvailable', (req, res) => {
                const movie = req.body.selectedMovie;
                const id = req.body.id;

                // console.log(movie, id);

                const { name, img, date, time } = movie;
                const sits = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
                console.log(sits.length);

                movies.updateOne({ _id: ObjectId(id) }, {
                        $set: { name: name, img: img, date: date, time: time, sits: sits }
                })
                        .then(result => {
                                res.send(result.modifiedCount > 0);
                        })
                        .catch(err => console.log(err));

        });

});



app.listen(process.env.PORT || 5000);
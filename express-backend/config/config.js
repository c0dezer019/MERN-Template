require('dotenv').config();
const { MongoClient } = require('mongodb');

const USERNAME = process.env.username;
const PASSWORD = process.env.password;
const CLUSTER = process.env.cluster;
const DB = process.env.prim_db;

const db = process.env.db;
const collection = '';

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}.nrozi.mongodb.net/${DB}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const main = async () => {};

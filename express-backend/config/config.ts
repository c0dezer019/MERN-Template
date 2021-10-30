require('dotenv').config();
const { MongoClient } = require('mongodb');

type MongoUrl = `mongodb://${string}:${string}@${string}.nrozi.mongodb.net/${string}?${string}`

const username: string = encodeURIComponent(process.env.username);
const password: string = encodeURIComponent(process.env.password);
const cluster: string = process.env.cluster;
const db: string = process.env.prim_db;

const authMechanism = "DEFAULT";

const uri: MongoUrl = `mongodb://${username}:${password}@${cluster}.nrozi.mongodb.net/${db}?authMechanism=${authMechanism}`;

export const client = new MongoClient(uri);

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Por favor, adicione a MONGODB_URI no arquivo .env.local');
}

if (!client) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

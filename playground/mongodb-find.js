// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to Mongodb server');
  const db = client.db('TodoApp')
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) =>{
    console.log('unable to fetch todos',err);
  });

  // client.close();
});

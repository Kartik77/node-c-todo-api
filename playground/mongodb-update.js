// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to Mongodb server');
  const db = client.db('TodoApp')
  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('5bb5a8b94ca6843c8036c50c')
  },{
    $set: {
      completed: true
    }
  },{
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });


  // client.close();
});

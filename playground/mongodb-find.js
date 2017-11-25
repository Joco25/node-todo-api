// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to mongodb server')
	
	// db.collection('Todos').find({_id: new ObjectID('5a18a6f2c5ca9e5ccc4891a1')}).toArray().then((docs)=>{
	// 	console.log('Todos')
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err)
	// })

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos count: ${count}`)
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err)
	// })

	db.collection('Users').find({name:'Joco'}).count().then((count)=>{
		console.log(`total number: ${count}`)
	},(err)=>{
		console.log('Unable to fetch todos',err)
	})

	// db.close()
});
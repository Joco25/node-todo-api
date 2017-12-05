// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to mongodb server')
	
	// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
	// 	console.log(result)
	// })
	
	// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result)
	// })

	// db.collection('Users').deleteMany({name:'Joco'}).then((result)=>{
	// 	console.log(result)
	// })

	// db.collection('Users').findOneAndDelete({_id:125}).then((result)=>{
	// 	console.log(JSON.stringify(result,undefined,2))
	// })

	


	// db.close()
});
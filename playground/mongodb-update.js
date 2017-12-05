// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to mongodb server')
	
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5a190da5645d680f0adbc59f')
	// },{
	// 	$set:{
	// 		completed: true
	// 	}
	// },
	// {
	// 	returnOriginal: false
	// }
	// ).then((result)=>{
	// 	console.log(result)
	// })

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a18a80e20b8234988bba5c1')
	},{
		$set:{
			name: "Joco"
		},
		$inc:{
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result)
	})

	// db.close()
});
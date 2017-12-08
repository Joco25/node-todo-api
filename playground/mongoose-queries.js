const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todos')
const {User} = require('./../server/models/user')

// var id = '5a29afa2bbabd50419dff5ee11'
var id = '5a27212da3976434094f0e30'

if(!ObjectID.isValid(id)){
	return console.log('ID not valid')
}

// Todo.find({
// 	_id:id
// }).then((todos)=>{
// 	console.log('Todos:', todos)
// })

// Todo.findOne({
// 		_id:id
// 	}).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found')
// 	}
// 	console.log('Todo:', todo)
// })

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found')
// 	}
// 	console.log('Todo by ID:', todo)
// }).catch((e)=> console.log(e))

User.findById(id).then((user)=>{
	if(!user){
		return console.log("User not found")
	}
	console.log('User:',user)
})
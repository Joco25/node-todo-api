const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todos')
const {User} = require('./../server/models/user')

var id = '5a27212da3976434094f0e30'

if(!ObjectID.isValid(id)){
	return console.log('ID not valid')
}

// Todo.remove({}).then((result)=>{
// 	console.log(result)
// })

Todo.findOneAndRemove({_id:'5a2a2b6c3b5272b441aa9b8f'}).then((doc)=>{
	console.log(doc)
})

// Todo.findByIdAndRemove('5a2a2b6c3b5272b441aa9b8f').then((doc)=>{
// 	console.log(doc)
// })

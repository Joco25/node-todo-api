const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var password = 'okayboys'

// bcrypt.genSalt(10,(err, salt)=>{
// 	bcrypt.hash(password,salt,(err,hash)=>{
// 		console.log(hash)
// 	})
// })

var hashedPassword = '$2a$10$jjC5KVdgOz40m0TjyoCOFuQ4cdJEstsn3RftIHDqB8DvaHZTxogG2'

bcrypt.compare(password, hashedPassword,(err, res)=>{
	console.log(res)
})

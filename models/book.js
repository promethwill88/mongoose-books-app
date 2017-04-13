let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new mongoose.Schema({
	title: String,
	author: {
		type: String,
		ref: 'Author'
	},
	image: String,
	releaseDate: String
});

let Book = mongoose.model('Book', BookSchema);


module.exports = Book;


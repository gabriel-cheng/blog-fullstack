const mongoose = require('mongoose');


const Post = mongoose.model('Post', {
	title: String,
	subtitle: String,
	message: String
});

module.exports = Post;

const router = require('express').Router();
const Post = require('../models/Post');

router.delete('/:id', async(req, res) => {
	const id = req.params.id;

	const post = await Post.findOne({_id:id});

	if(!post) {
		res.status(422).json({deleteFindUserErr: 'Usuário não encontrado!'});
	}

	try {
		await Post.deleteOne({_id:id});

		res.status(200).json({message: 'Usuário deletado com sucesso!'});
	} catch(err) {
		res.status(400).json({deleteErr: err});
	}
});

router.patch('/:id', async(req, res) => {
	const id = req.params.id;
	const { title, subtitle, message } = req.body;

	const post = {
		title,
		subtitle,
		message
	};

	try {
		const updatePost = await Post.updateOne({_id:id}, post);

		if(updatePost.matchedCount == 0) {
			res.status(422).json({message: 'O usuário não foi encontrado!'});
		}

		res.status(200).json(post);
	} catch(err) {
		res.status(400).json({editErr: err});
	}
});

router.post('/', async(req, res) => {
	const { title, subtitle, message } = req.body;

	const post = {
		title,
		subtitle,
		message
	};

	try {
		await Post.create(post);

		res.status(200).json({status: 'Usuário criado com sucesso!'});
	}catch(err) {
		res.status(400).json({createPostErr: err});
	}
});

router.get('/:id', async(req, res) => {
	const id = req.params.id;

	try {
		const post = await Post.findOne({
			_id: id
		});

		if(!post) {
			console.log('Pessoa não encontrada!');
		} else {
			res.status(200).json(post);
		}
	} catch(err) {
		res.status(400).json({findByIdErr: err});
	}
});

router.get('/', (req, res) => {
	Post.find()
		.then(e => res.status(200).json(e))
		.catch((err) => {
			res.status(400).json({findAllErr: err});
		});
});

module.exports = router;

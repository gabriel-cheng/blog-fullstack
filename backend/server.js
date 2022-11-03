require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const router = require('./router/routes.js');
const mongoConnect = require('./database/connect');

app.use(express.json());
app.use(cors());

mongoConnect();

app.use('/', router);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});

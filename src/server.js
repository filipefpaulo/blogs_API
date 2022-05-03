require('dotenv/config');
const express = require('express');
require('express-async-errors');

const errorMiddleware = require('./api/middlewares/errorMiddleware');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/user', routes.user);
app.use('/login', routes.login);
app.use('/categories', routes.category);
app.use('/post', routes.post);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

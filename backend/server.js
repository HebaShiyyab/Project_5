const express = require('express');
const cors = require('cors');
require("dotenv").config();
const db = require('./db/db');

const app = express();

//routers
const registerRouter = require('./routers/routes/auth/signUp')
const loginRouter = require('./routers/routes/auth/login');
const bookRouter = require('./routers/routes/books');
const favoriteRouter = require('./routers/routes/favorites');
const shoppingCartRouter = require('./routers/routes/shopping_cart');

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(loginRouter);
app.use(registerRouter);
app.use('/book',bookRouter);
app.use(favoriteRouter);
app.use(shoppingCartRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});

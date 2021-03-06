const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const errorHandler = require('./controllers/error');


app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes 

// const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorHandler.get404);


const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));


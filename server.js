const express = require('express');
const mongoose = require('mongoose');
const app = express();
const urouter = require('./routes/userRoute');
const crouter=require('./routes/categoryRoutes');
const prouter=require('./routes/productRoutes');
const cors=require('cors')
// const authRoute = require('./routes/authRoute');
// const orderRoutes = require('./routes/orderRoutes');


// app.use('/api/v1/auth', authRoute);
// app.use('/api/v1/order', orderRoutes);


app.use(express.json()); // Middleware should be before routes

// Default route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my app</h1>");
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connected ..."))
    .catch(err => console.log(`Error: ${err}`));  // Fix string interpolation

// Use user routes
app.use('/api/v1/user', urouter);
app.use('/api/v1/category', crouter);
app.use('/api/v1/product', prouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const dbConnect = require('./dbConnect');
const app = express();
const mainRouter = require('./routers/index');
const { models } = require('mongoose');

const PORT = process.env.PUBLIC_PORT || 4000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next)=>{
    console.log('Global Middleware Is Working...');
    next();
});

app.use('/api', mainRouter);

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'models/login.html'));
});
app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname, 'models/signup.html'));
})

dbConnect();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); 
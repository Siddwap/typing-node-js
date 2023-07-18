async function dbConnect(){
    const mongoose = require('mongoose');
const uri = `mongodb+srv://sdtesting:Z2q6zo5ICmlNhNwd@cluster0.9rr3ocv.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true}).then(()=>{
        console.log("MongoDb Connected");
    }).catch(()=>{
        console.log("Error in MongoDb");
    });
}

module.exports = dbConnect;

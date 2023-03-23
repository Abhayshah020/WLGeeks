const mongoose = require('mongoose');
module.exports = connect = async () => {
    try {
        //database = takeaway
        await mongoose.connect('mongodb://127.0.0.1:27017/WebGeek', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to mongodb");
    } catch (error) {
        console.error(error);
    }
}
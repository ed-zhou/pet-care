const mongoose = require('mongoose')

const connectToDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB')
    } catch(err: unknown){
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error('An unknown error occurred');
        }
        process.exit(1)
    }
}
module.exports = connectToDB
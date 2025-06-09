const mongodb = require('mongoose')

const mongoDBConnection = async () => {
    try {
        await mongodb.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected')
    }
    catch (error) {
        console.log("not connected database", error)
        process.exit(1);
    }
}

module.exports = mongoDBConnection;
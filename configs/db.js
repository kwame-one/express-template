const mongoose = require('mongoose');

module.exports = async (host, db, port, user =null, password=null) => {
    await mongoose.connect(`mongodb://${host}:${port}/${db}`);
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
var mongoose = require("mongoose")

const db = {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    options: {
        useNewUrlParser: true
    }
}

mongoose.connect(db.url, db.options);

module.exports = mongoose;